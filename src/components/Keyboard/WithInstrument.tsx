import React from "react";
import { useAudioContext } from "../AudioContextProvider";
import { useSoundfont } from "../../adapter/Soundfont";
import { useMount } from "../../utils/useMount";
import { Keyboard } from "../Keyboard";
import "./style.css";

export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext();
  const { loading, play, stop, load } = useSoundfont({ AudioContext });

  const a = useMount(load);

  return <Keyboard loading={loading} play={play} stop={stop} />;
};
