/// <reference types="react-scripts" />
//defined globally
type AudioContextType = typeof AudioContext;

interface Window extends Window {
  webkitAudioContext: AudioContextType;
}

type SoundfontType = typeof Soundfont;
