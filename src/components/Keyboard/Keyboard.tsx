import React from "react";
import { VoidExpression } from "typescript";
import { selectKey } from "../../domain/keyboard";
import { MidiValue, notes } from "../../domain/note";
import { Key } from "../Key";
import "./style.css";

export interface KeyboardProps {
  loading: boolean;
  play: (note: MidiValue) => Promise<void>;
  stop: (note: MidiValue) => Promise<void>;
}

export const Keyboard = ({ loading, play, stop }: KeyboardProps) => (
  <div className="keyboard">
    {/* unpacking list of object ((object)) => (({property of object})) */}
    {notes.map(({ midi, type, index, octave }) => {
      const label = selectKey(octave, index);
      return (
        <Key
          key={midi}
          type={type}
          label={label}
          disabled={loading}
          onDown={() => play(midi)}
          onUp={() => stop(midi)}
        />
      );
    })}
  </div>
);
