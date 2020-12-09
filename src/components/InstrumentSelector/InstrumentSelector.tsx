import React from "react";
import { useInstrument } from "../../state/Instrument/Context";
import { InstrumentName } from "soundfont-player";
import { options } from "./options";

export const InstrumentSelector = () => {
  const { instrument, setInstrument } = useInstrument();
  const updateValue = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    setInstrument(target.value as InstrumentName);
  };

  return (
    <select onChange={updateValue} className="instruments" value={instrument}>
      {options.map(({ label, value }) => {
        <option key={value} value={value}>
          {label}
        </option>;
      })}
    </select>
  );
};
