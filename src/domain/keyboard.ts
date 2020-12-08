import { OctaveIndex, PitchIndex } from "./note";

export type Key = string;
export type Keys = Key[];

//create array from each string 
export const TOP_ROW: Keys = Array.from("q2w3er5t6y7u");
export const BOTTOM_ROW: Keys = Array.from("zsxdcvgbhnjm");

export const selectKey = (octave: OctaveIndex, index: PitchIndex): Key => {
  const keysRow = octave < 5 ? TOP_ROW : BOTTOM_ROW;
  return keysRow[index];
};


