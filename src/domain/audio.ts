import { Optional } from "./types";

//Optional takes T type (whatever type passed in) as argument and then add it to option that we already have
//in this case Optional represent AudioContextType, or null if nothing
export const accessContext = (): Optional<AudioContextType> => {
  //webkit is defined in extended version of window type
  return window.AudioContext || window.webkitAudioContext || null;
};
