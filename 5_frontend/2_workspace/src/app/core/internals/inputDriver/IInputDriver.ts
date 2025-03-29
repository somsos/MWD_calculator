import { IResultsDto, MapSamples } from "../../../0shared";

export interface IInputDriver {

  resolveSamples(samplesRows1: MapSamples): IResultsDto;

  parseFileToSamples(file: File): Promise<MapSamples>;

}
