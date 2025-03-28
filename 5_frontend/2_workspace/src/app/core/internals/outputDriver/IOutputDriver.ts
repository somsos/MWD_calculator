import { IResultsDto, MapSamples } from "../../../0shared";

export interface IOutputDriver {

  resultsToCsv(r: IResultsDto, s: MapSamples): Promise<void>;

}
