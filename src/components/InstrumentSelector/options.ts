import { InstrumentName } from "soundfont-player";
import instruments from "soundfont-player/names/musyngkite.json"

interface Option {
  value: InstrumentName;
  label: string;
}

type OptionList = Option[];
type InstrumentList = InstrumentName[];

const normalizeList = (list: InstrumentList): OptionList =>
  list.map((instrument) => ({
    value: instrument,
    //remove underscore 
    //e.g "acoustic_grand_pioano" => "acousticgrandpiano"
    label: instrument.replace(/_/gi, ""),
  }));

export const options = normalizeList(instruments as InstrumentList);
