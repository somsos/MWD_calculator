import { MapSamples } from "../../../0shared";
import { testCalc } from "./CalculatorImpl_utils.spec";



describe("ICalculator", () => {
  const samplesRows1: MapSamples = new Map([
    [ 0, { tamizDiameter: 7.0,   soilWeight: 0.0 } ],
    [ 1, { tamizDiameter: 3.5,   soilWeight: 4.4 } ],
    [ 2, { tamizDiameter: 1.0,   soilWeight: 19.3 } ],
    [ 3, { tamizDiameter: 0.5,   soilWeight: 30.9 } ],
    [ 4, { tamizDiameter: 0.25,  soilWeight: 36.1 } ],
    [ 5, { tamizDiameter: 0.25,  soilWeight: 31.31 } ],
    [ 6, { tamizDiameter: 0.053, soilWeight: 39.45 } ],
    [ 7, { tamizDiameter: 0.0,   soilWeight: 21.05 } ],
  ]);

  const MWDTotalExpected = 0.278211549;
  
  // It's the sum of all the soilWeight values
  const expectedWeight = 182.51;
  
  
  // It's the sum of the 2 tamizDiameter values divided by 2 in sequence,
  const soilWeightsExpected = [
    5.25,
    2.25,
    0.75,
    0.375,
    0.25,
    0.1515,
    0.0265
  ];
  
  // CAREFUL: These are intermediate values, are not part of the results to show to the user.
  // It's the soilWeight divided by the expectedWeight in sequence.
  


  const soilPortionsExpected = [
    0,
    0.024108268,
    0.10574763,
    0.169305791,
    0.197797381,
    0.171552244,
    0.21615254,
    0.115336146
  ];

  // CAREFUL: A cero is added at the end so soilWeightsExpected and soilPortionsExpected
  // match the array length.
  const MWDsExpected = [
    0.0,
    0.054243603,
    0.079310722,
    0.063489672,
    0.049449345,
    0.025990165,
    0.005728042,
    0.0
  ];
  
  testCalc(
    samplesRows1,
    expectedWeight,
    soilWeightsExpected,
    soilPortionsExpected,
    MWDsExpected,
    MWDTotalExpected
  );

})