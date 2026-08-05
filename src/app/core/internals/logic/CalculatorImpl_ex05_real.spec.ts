import { MapSamples } from "../../../0shared";
import { testCalc } from "./CalculatorImpl_utils.spec";



describe("ICalculator", () => {
  const samplesRows1: MapSamples = new Map([
    [ 0, { tamizDiameter: 6.36, soilWeight: 30     } ],
    [ 1, { tamizDiameter: 4.76, soilWeight: 81   } ],
    [ 2, { tamizDiameter: 3.36, soilWeight: 85  } ],
    [ 3, { tamizDiameter: 2.0,  soilWeight: 84  } ],
    [ 4, { tamizDiameter: 1.0,  soilWeight: 73 } ],
    [ 5, { tamizDiameter: 0.5,  soilWeight: 83 } ],
    [ 6, { tamizDiameter: 0.25, soilWeight: 32  } ],
    [ 7, { tamizDiameter: 0.0,  soilWeight: 20 } ],
  ]);

  const MWDTotalExpected = 1.924866807;
  
  // It's the sum of all the soilWeight values
  const expectedWeight = 488;
  
  // It's the sum of the 2 tamizDiameter values divided by 2 in sequence,
  const soilWeightsExpected = [
    5.56,
    4.06,
    2.68,
    1.5,
    0.75,
    0.375,
    0.125,
    //0.0, // Added
  ];
  
  // CAREFUL: These are intermediate values, are not part of the results to show to the user.
  // It's the soilWeight divided by the expectedWeight in sequence.
  const soilPortionsExpected = [
    0.06147541,
    0.165983607,
    0.174180328,
    0.172131148,
    0.149590164,
    0.170081967,
    0.06557377,
    0.040983607,
  ];

  // CAREFUL: A cero is added at the end so soilWeightsExpected and soilPortionsExpected
  // match the array length.
  const MWDsExpected = [
      0.34180328,
      0.673893444,
      0.466803279,
      0.258196722,
      0.112192623,
      0.063780738,
      0.008196721,
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
