import { MapSamples } from "../../../0shared";
import { testCalc } from "./CalculatorImpl_utils.spec";



describe("ICalculator", () => {
  const samplesRows1: MapSamples = new Map([
    [ 0, { tamizDiameter: 6.25,  soilWeight: 0.0   } ],
    [ 1, { tamizDiameter: 4.75,  soilWeight: 5.6   } ],
    [ 2, { tamizDiameter: 2,     soilWeight: 14.3  } ],
    [ 3, { tamizDiameter: 0.25,  soilWeight: 29.3  } ],
    [ 4, { tamizDiameter: 0.125, soilWeight: 30.33 } ],
    [ 5, { tamizDiameter: 0.25,  soilWeight: 38.11 } ],
    [ 6, { tamizDiameter: 0.05,  soilWeight: 42.2  } ],
    [ 7, { tamizDiameter: 0.0,   soilWeight: 13.45 } ],
  ]);

  const MWDTotalExpected = 0.305497286;
  
  // It's the sum of all the soilWeight values
  const expectedWeight = 173.29;
  
  
  // It's the sum of the 2 tamizDiameter values divided by 2 in sequence,
  const soilWeightsExpected = [
    5.5,
    3.375,
    1.125,
    0.1875,
    0.1875,
    0.15,
    0.025,
  ];
  
  // CAREFUL: These are intermediate values, are not part of the results to show to the user.
  // It's the soilWeight divided by the expectedWeight in sequence.
  const soilPortionsExpected = [
    0,
    0.032315771,
    0.08252063,
    0.169080732,
    0.175024525,
    0.219920365,
    0.243522419,
    0.077615558
  ];

  // CAREFUL: A cero is added at the end so soilWeightsExpected and soilPortionsExpected
  // match the array length.
  const MWDsExpected = [
    0.0,
    0.109065727,
    0.092835709,
    0.031702637,
    0.032817098,
    0.032988055,
    0.00608806,
    0.0,
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
