import React, { PropsWithChildren, useState } from "react";
import { DEFAULT_INSTRUMENT } from "../../domain/sound";
import { InstrumentContext } from "./Context";

//we take property "children" of the obj const fn = ({children}: PropsWithChildren)
//instead of obj itself const fn = (children: PropsWtihChildren)
//to avoid error: that object is array and not type Chidren
//but this obj has property children => object.children which is what we need "PropsWithChildren"
export const InstrumentContextProvider = ({children}: PropsWithChildren<{}>) => {
  const [instrument, setInstrument] = useState(DEFAULT_INSTRUMENT);
  return (
    <InstrumentContext.Provider value={{ instrument, setInstrument }}>
      {children}
    </InstrumentContext.Provider>
  );
};
