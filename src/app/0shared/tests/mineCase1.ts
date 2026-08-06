import { TestCalcCaseData } from "../internals/types/TestCalcCaseData";

export const mineCase1: TestCalcCaseData = {
    inputSamples: new Map([
      [ 0, { tamizDiameter: 8.0,   soilWeight:   0.0    }  ],
      [ 1, { tamizDiameter: 4.0,   soilWeight:   3.4    }  ],
      [ 2, { tamizDiameter: 2.0, soilWeight:   21.26  }  ],
      [ 3, { tamizDiameter: 1.0, soilWeight:   34.73  }  ],
      [ 4, { tamizDiameter: 0.5, soilWeight:   35.69  }  ],
      [ 5, { tamizDiameter: 0.25, soilWeight:  31.31  }  ],
      [ 6, { tamizDiameter: 0.053, soilWeight: 38.26  }  ],
      [ 7, { tamizDiameter: 0.0, soilWeight:   25.37  }  ],
    ]),

    // 0.459312730238922 = 0.0 + 0.053678559 + 0.16782444 + 0.13707767625 + 0.07043337525 + 0.0249629775435 + 0.0053357015155
    MWDTotalExpected: 0.459312730238922,
    
    // 0.0 + 3.4 + 21.26 + 34.73 + 35.69 + 31.31 + 38.26 + 25.37;,
    expectedWeight: 190.02,

    // It's the sum of the 2 tamizDiameter values divided by 2 in sequence,
    soilWeightsExpected: [
      6.0000, // 1. (8.0 + 4.0) / 2 = 6.0
      3.0000, // 2. (4.0 + 2.0) / 2 = 3.0
      1.5000, // 3. (2.0 + 1.0) / 2 = 1.5
      0.7500, // 4. (1.0 + 0.5) / 2 = 0.75
      0.3750, // 5. (0.5 + 0.25) / 2 = 0.375
      0.1515, // 6. (0.25 + 0.053) / 2 = 0.1515
      0.0265, // 7. (0.053 + 0.0) / 2 = 0.0265
    ],

    // CAREFUL: These are intermediate values, are not part of the results to show to the user.
    // It's the soilWeight divided by the expectedWeight in sequence.
    soilPortionsExpected: [
      0.0,         // 1. 0.0 / 190.02 = 0.0
      0.017892853, // 2. 3.4 / 190.02 = 0.017892853
      0.11188296,  // 3. 21.26 / 190.02 = 0.1118829
      0.182770234712, // 4. 34.73 / 190.02 = 0.182770234712
      0.187822334491, // 5. 35.69 / 190.02 = 0.187822334491
      0.16477212925, // 6. 31.31 / 190.02 = 0.16477212925
      0.201347226608, // 7. 38.26 / 190.02 = 0.201347226608
      0.133512261867, // 8. 25.37 / 190.02 = 0.133512261867
    ],
    MWDsExpected: [
      0.0,     // 1. 6.0000 * 0.0 = 0.0
      0.053678559,     // 2. 3.0000 * 0.017892853 = 0.053678559
      0.16782444,      // 3. 1.5000 * 0.111882960 = 0.16782444
      0.13707767625,   // 4. 0.7500 * 0.182770235 = 0.13707767625
      0.07043337525,   // 5. 0.3750 * 0.187822334 = 0.07043337525
      0.0249629775435, // 6. 0.1515 * 0.164772129 = 0.0249629775435
      0.0053357015155, // 7. 0.0265 * 0.201347227 = 0.0053357015155
      0.0,               // 8. 0.0    * 0.133512262 = 0.0
    ],
  };