import { MapSamples } from "./IRowSample";

export interface TestCalcCaseData {
  inputSamples: MapSamples
  MWDTotalExpected: number;
  expectedWeight: number;
  soilWeightsExpected: number[];
  soilPortionsExpected: number[];
  MWDsExpected: number[];
}