import { MapSamples } from "../../../0shared";
import { testCalc } from "./CalculatorImpl_utils.spec";




describe("ICalculator", () => {
  // precision = 9
  const samplesRows1: MapSamples = new Map([
    [ 0, { tamizDiameter: 10.0,  soilWeight: 0.0    }  ],
    [ 1, { tamizDiameter: 7.0,   soilWeight: 5.5   }  ],
    [ 2, { tamizDiameter: 5.5,   soilWeight: 0.25  }  ],
    [ 3, { tamizDiameter: 4.4,   soilWeight: 20.11 }  ],
    [ 4, { tamizDiameter: 1.1,   soilWeight: 31.50 }  ],
    [ 5, { tamizDiameter: 0.25,  soilWeight: 10.05 }  ],
    [ 6, { tamizDiameter: 0.10,  soilWeight: 35.10 }  ],
    [ 7, { tamizDiameter: 0.05,  soilWeight: 15.22 }  ],
  ]);
  
  // It's the sum of all the soilWeight values
  // 0.0 + 5.5 + 0.25 + 20.11 + 31.50 + 10.05 + 35.10 + 15.22 = 117.73
  const expectedWeight = 117.72999999999999;
  
  // It's the sum of the 2 tamizDiameter values divided by 2 in sequence,
  const soilWeightsExpected = [
    8.5,   // = 1. (10.0 + 7.0) / 2  = 8.5
    6.25,  // = 2. (7.0 + 5.5) / 2   = 6.25
    4.95,  // = 3. (5.5 + 4.4) / 2   = 4.95
    2.75,  // = 4. (4.4 + 1.1) / 2   = 2.75
    0.675, // = 5. (1.1 + 0.25) / 2  = 0.675
    0.175, // = 6. (0.25 + 0.10) / 2 = 0.175
    0.075, // = 7. (0.10 + 0.05) / 2 = 0.075
  ]

  // CAREFUL: These are intermediate values, are not part of the results to show to the user.
  // It's the soilWeight divided by the expectedWeight in sequence.
  const soilPortionsExpected = [
  //0.027777778, // WRONG
    0.0,         // 1. 0.0   / 117.73 = 0.0
    0.046717064, // 2. 5.5   / 117.73 = 0.0467170644696
    0.002123503, // 3. 0.25  / 117.73 = 0.00212350293043
    0.170814576, // 4. 20.11 / 117.73 = 0.170814575724
    0.267561369, // 5. 31.50 / 117.73 = 0.267561369235
    0.085364818, // 6. 10.05 / 117.73 = 0.0853648178035
    0.298139811, // 7. 35.10 / 117.73 = 0.298139811433
    0.129278858, // 8. 15.22 / 117.73 = 0.129278858405
  ];

  // CAREFUL: A cero is added at the end so soilWeightsExpected and soilPortionsExpected
  // match the array length.
  const MWDsExpected = [
  //0.397095044, // WRONG
    0.0,         // 1. 8.5 * 0 = 0
    0.29198165,  // 2. 6.25 * 0.046717064 = 0.29198165
    0.01051134,  // 3. 4.95 * 0.002123503 = 0.01051133985
    0.469740084, // 4. 2.75 * 0.170814576 = 0.469740084
    0.180603924, // 5. 0.675 * 0.267561369 = 0.180603924075
    0.014938843, // 6. 0.175 * 0.085364818 = 0.01493884315
    0.022360486, // 7. 0.075 * 0.298139811 = 0.022360485825
    0.0        , // 8. 0 * 0.129278858 = 0.0
  ];
  

  // It's the sum of all the MWDsExpected values
  // 0.397095044 + 0.013271894 + 0.845532151 + 0.735793765 + 0.057621252 + 0.052174467 + 0.009695914 + 0.0 = 0.9901363269
  const MWDTotalExpected = 0.990136327;


  testCalc(
    samplesRows1,
    expectedWeight,
    soilWeightsExpected,
    soilPortionsExpected,
    MWDsExpected,
    MWDTotalExpected
  );

})
