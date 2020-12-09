import { useState, useRef } from "react";
import Soundfont, { InstrumentName, Player } from "soundfont-player";
import { Optional } from "../../domain/types";
import { MidiValue } from "../../domain/note";
import { AudioNodesRegistry, DEFAULT_INSTRUMENT } from "../../domain/sound";

interface Settings {
  AudioContext: Optional<AudioContextType>;
}

interface Adapted {
  loading: boolean;
  current: Optional<InstrumentName>;

  //load play stop utilize window.audio which are async so must they (return promise object)
  //Promise<TResult>: return promise of some value, but not value right away
  load(instrument?: InstrumentName): Promise<void>;
  play(note: MidiValue): Promise<void>;
  stop(note: MidiValue): Promise<void>;
}

//takes audioContext obj (constructor) to work with soundFont API
export const useSoundfont = ({ AudioContext }: Settings): Adapted => {
  let activeNode: AudioNodesRegistry = {};
  const [current, setCurrent] = useState<Optional<InstrumentName>>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [player, setPlayer] = useState<Optional<Player>>(null);

  //to keep ref of AudioContext when component mounts

  //opject is possibly null ?
  //if we know its not then use exclaimation
  //otherwise write the case to handle null
  const audio = useRef(new AudioContext!());

  const load = async (instrument: InstrumentName = DEFAULT_INSTRUMENT) => {
    setLoading(true);
    const player = await Soundfont.instrument(audio.current, instrument);

    setLoading(false);
    setCurrent(instrument);
    setPlayer(player);
  };

  //if we don't wrap it with currly bracket "{}"
  //this function with try to return object, when it in fact return void
  //that's why we get resume() return undefined 
  //cuz it just void callback that never mean to return anything
  const resume = async () => {
    return audio.current.state === "suspended"
      ? await audio.current.resume()
      : Promise.resolve()
  }

  const play = async (note: MidiValue) => {
    await resume();
    if (!player) return;

    const node = player.play(note.toString());
    activeNode = { ...activeNode, [note]: node };
  };

  const stop = async (note: MidiValue) => {
    await resume();
    if (!activeNode[note]) return;

    //object.prop!
    //! to declare that object.prop is certainly not null
    activeNode[note]!.stop();
    activeNode = { ...activeNode, [note]: null };
  };
  return { loading, current, load, play, stop };
};
