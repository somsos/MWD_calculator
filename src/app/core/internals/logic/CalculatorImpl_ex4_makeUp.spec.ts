import { MapSamples } from "../../../0shared";
import { testCalc } from "./CalculatorImpl_utils.spec";




describe("ICalculator", () => {
  const samplesRows1: MapSamples = new Map([
    [0, {soilWeight: 1, tamizDiameter: 10}],
    [1, {soilWeight: 2, tamizDiameter: 11}],
    [2, {soilWeight: 3, tamizDiameter: 12}],
    [3, {soilWeight: 4, tamizDiameter: 13}],
    [4, {soilWeight: 5, tamizDiameter: 14}],
    [5, {soilWeight: 6, tamizDiameter: 15}],
    [6, {soilWeight: 7, tamizDiameter: 16}],
    [7, {soilWeight: 8, tamizDiameter: 17}],
  ]);

  // It's the sum of all the soilWeight values
  // 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17
  const expectedWeight = 108
  
  // It's the sum of all the soilWeight values
  const soilWeightsExpected: number[] = [
    10.5,  // (1 + 2) / 2
    11.5,  // (2 + 3) / 2
    12.5,  // (3 + 4) / 2
    13.5,  // (4 + 5) / 2
    14.5,  // (5 + 6) / 2
    15.5,  // (6 + 7) / 2
    16.5,  // (7 + 8) / 2
  ] // 8 +

  // CAREFUL: These are intermediate values, are not part of the results to show to the user.
  // It's the soilWeight divided by the expectedWeight in sequence.
  const soilPortionsExpected = [
    0.027777778,
    0.055555556,
    0.083333333,
    0.111111111,
    0.138888889,
    0.166666667,
    0.194444444,
    0.222222222,
  ];

  // CAREFUL: A cero is added at the end so soilWeightsExpected and soilPortionsExpected
  // match the array length.
  const MWDsExpected = [
    0.583333338,
    0.958333329, 
    1.388888888,
    1.875000002,
    2.416666672,
    3.013888882,
    3.666666663,
    0.0
  ]

  // It's the sum of all the MWDsExpected values
  const MWDTotalExpected = 13.902777774;

  testCalc(
    samplesRows1,
    expectedWeight,
    soilWeightsExpected,
    soilPortionsExpected,
    MWDsExpected,
    MWDTotalExpected
  );

})
