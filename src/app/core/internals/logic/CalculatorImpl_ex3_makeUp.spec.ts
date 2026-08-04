import { MapSamples } from "../../../0shared";
import { testCalc } from "./CalculatorImpl_utils.spec";




describe("ICalculator", () => {
  
  // precision = 9;
  const samplesRows1: MapSamples = new Map([
    [ 0, { tamizDiameter: 6.36, soilWeight: 30 }  ],
    [ 1, { tamizDiameter: 4.76, soilWeight: 81 }  ],
    [ 2, { tamizDiameter: 3.36, soilWeight: 85 }  ],
    [ 3, { tamizDiameter: 2.0,  soilWeight: 84 }  ],
    [ 4, { tamizDiameter: 1.0,  soilWeight: 73 }  ],
    [ 5, { tamizDiameter: 0.5,  soilWeight: 83 }  ],
    [ 6, { tamizDiameter: 0.25, soilWeight: 32 }  ],
    [ 7, { tamizDiameter: 0.0,  soilWeight: 20 }  ],
  ]);
  // It's the sum of all the soilWeight values
  const expectedWeight = 488; // = 30 + 81 + 85 + 84 + 73 + 83 + 32 + 20 = 488.
  
  // It's the sum of the 2 tamizDiameter values divided by 2 in sequence,
  const soilWeightsExpected = [
    5.56,   // = (6.36 + 4.76) / 2
    4.06,   // = (4.76 + 3.36) / 2
    2.68,   // = (3.36 + 2.00) / 2
    1.5,    // = (2.00 + 1.00) / 2
    0.75,   // = (1.00 + 0.50) / 2
    0.375,  // = (0.50 + 0.25) / 2
    0.125,  // = (0.25 + 0.00) / 2
  ];

  // CAREFUL: These are intermediate values, are not part of the results to show to the user.
  // It's the soilWeight divided by the expectedWeight in sequence.
  
  const soilPortionsExpected = [
    0.06147541, // = 30 / 488
    0.165983607, // = 81 / 488
    0.174180328, // = 85 / 488
    0.172131148, // = 84 / 488
    0.149590164, // = 73 / 488
    0.170081967, // = 83 / 488
    0.06557377, // = 32 / 488
    0.040983607 // = 20 / 488
  ];
  
  // CAREFUL: A cero is added at the end so soilWeightsExpected and soilPortionsExpected
  // match the array length.
  const MWDsExpected = [
      0.34180328, // 5.56  * 0.061475409836
      0.673893444, // 4.06  * 0.165983606557
      0.466803279, // 2.68  * 0.174180327869
      0.258196722, // 1.5   * 0.172131147541
      0.112192623,  // 0.75  * 0.149590163934
      0.063780738, // 0.375 * 0.170081967213
      0.008196721, // 0.125 * 0.065573770492
      0.0,            // 0.0   * 0.040983606557
  ];

  // It's the sum of all the MWDsExpected values
  // 0.341803278689 + 0.673893442621 + 0.466803278689 + 0.258196721312 + 0.11219262295 + 0.0637807377049 + 0.00819672131148
  const MWDTotalExpected = 1.924866807;
  

  testCalc(
      samplesRows1,
      expectedWeight,
      soilWeightsExpected,
      soilPortionsExpected,
      MWDsExpected,
      MWDTotalExpected
  );

})
