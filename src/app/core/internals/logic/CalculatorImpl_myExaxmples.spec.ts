
import { TestCalcCaseData } from "../../../0shared/internals/types/TestCalcCaseData";
import { mineCase1 } from "../../../0shared/tests/mineCase1";
import { testCalc } from "./CalculatorImpl_utils.spec";




describe("Example 1", () => {
  testCalc(mineCase1);
})





describe("Example 2", () => {
  
  const testCase2: TestCalcCaseData = {
    inputSamples: new Map([
      [ 0, { tamizDiameter: 10.0,  soilWeight: 0.0    }  ],
      [ 1, { tamizDiameter: 7.0,   soilWeight: 5.5   }  ],
      [ 2, { tamizDiameter: 5.5,   soilWeight: 0.25  }  ],
      [ 3, { tamizDiameter: 4.4,   soilWeight: 20.11 }  ],
      [ 4, { tamizDiameter: 1.1,   soilWeight: 31.50 }  ],
      [ 5, { tamizDiameter: 0.25,  soilWeight: 10.05 }  ],
      [ 6, { tamizDiameter: 0.10,  soilWeight: 35.10 }  ],
      [ 7, { tamizDiameter: 0.05,  soilWeight: 15.22 }  ],      
    ]),    
    MWDTotalExpected: 0.990136327,
    expectedWeight: 117.72999999999999,
    soilWeightsExpected: [
      8.5,   // = 1. (10.0 + 7.0) / 2  = 8.5
      6.25,  // = 2. (7.0 + 5.5) / 2   = 6.25
      4.95,  // = 3. (5.5 + 4.4) / 2   = 4.95
      2.75,  // = 4. (4.4 + 1.1) / 2   = 2.75
      0.675, // = 5. (1.1 + 0.25) / 2  = 0.675
      0.175, // = 6. (0.25 + 0.10) / 2 = 0.175
      0.075, // = 7. (0.10 + 0.05) / 2 = 0.075
    ],
    soilPortionsExpected: [
      //0.027777778, // WRONG
      0.0,           // 1. 0.0   / 117.73 = 0.0
      0.046717064,   // 2. 5.5   / 117.73 = 0.0467170644696
      0.002123503,   // 3. 0.25  / 117.73 = 0.00212350293043
      0.170814576,   // 4. 20.11 / 117.73 = 0.170814575724
      0.267561369,   // 5. 31.50 / 117.73 = 0.267561369235
      0.085364818,   // 6. 10.05 / 117.73 = 0.0853648178035
      0.298139811,   // 7. 35.10 / 117.73 = 0.298139811433
      0.129278858,   // 8. 15.22 / 117.73 = 0.129278858405
    ],
    MWDsExpected: [
      //0.397095044, // WRONG
      0.0,           // 1. 8.5 * 0 = 0
      0.29198165,    // 2. 6.25 * 0.046717064 = 0.29198165
      0.01051134,    // 3. 4.95 * 0.002123503 = 0.01051133985
      0.469740084,   // 4. 2.75 * 0.170814576 = 0.469740084
      0.180603924,   // 5. 0.675 * 0.267561369 = 0.180603924075
      0.014938843,   // 6. 0.175 * 0.085364818 = 0.01493884315
      0.022360486,   // 7. 0.075 * 0.298139811 = 0.022360485825
      0.0        ,   // 8. 0 * 0.129278858 = 0.0
    ],
  };
  
  testCalc(testCase2);
  
})





describe("Example 3", () => {
  

  const testCase3: TestCalcCaseData = {
    inputSamples: new Map([
      [ 0, { tamizDiameter: 7.0,   soilWeight: 0.0 } ],
      [ 1, { tamizDiameter: 3.5,   soilWeight: 4.4 } ],
      [ 2, { tamizDiameter: 1.0,   soilWeight: 19.3 } ],
      [ 3, { tamizDiameter: 0.5,   soilWeight: 30.9 } ],
      [ 4, { tamizDiameter: 0.25,  soilWeight: 36.1 } ],
      [ 5, { tamizDiameter: 0.25,  soilWeight: 31.31 } ],
      [ 6, { tamizDiameter: 0.053, soilWeight: 39.45 } ],
      [ 7, { tamizDiameter: 0.0,   soilWeight: 21.05 } ],
    ]),    
    MWDTotalExpected: 0.278211549,
    expectedWeight: 182.51,
    soilWeightsExpected: [
      5.25,
      2.25,
      0.75,
      0.375,
      0.25,
      0.1515,
      0.0265
    ],
    soilPortionsExpected: [
      0,
      0.024108268,
      0.10574763,
      0.169305791,
      0.197797381,
      0.171552244,
      0.21615254,
      0.115336146
    ],
    MWDsExpected: [
      0.0,
      0.054243603,
      0.079310722,
      0.063489672,
      0.049449345,
      0.025990165,
      0.005728042,
      0.0
    ],
  };
  
  testCalc(testCase3);
  
})





describe("Example 4 ", () => {
  
  const testCase4: TestCalcCaseData = {
    inputSamples: new Map([
      [ 0, { tamizDiameter: 6.25,  soilWeight: 0.0   } ],
      [ 1, { tamizDiameter: 4.75,  soilWeight: 5.6   } ],
      [ 2, { tamizDiameter: 2,     soilWeight: 14.3  } ],
      [ 3, { tamizDiameter: 0.25,  soilWeight: 29.3  } ],
      [ 4, { tamizDiameter: 0.125, soilWeight: 30.33 } ],
      [ 5, { tamizDiameter: 0.25,  soilWeight: 38.11 } ],
      [ 6, { tamizDiameter: 0.05,  soilWeight: 42.2  } ],
      [ 7, { tamizDiameter: 0.0,   soilWeight: 13.45 } ],
    ]),    
    MWDTotalExpected: 0.305497286,
    expectedWeight: 173.29,
    soilWeightsExpected: [
      5.5,
      3.375,
      1.125,
      0.1875,
      0.1875,
      0.15,
      0.025,
    ],
    soilPortionsExpected: [
      0,
      0.032315771,
      0.08252063,
      0.169080732,
      0.175024525,
      0.219920365,
      0.243522419,
      0.077615558
    ],
    MWDsExpected: [
      0.0,
      0.109065727,
      0.092835709,
      0.031702637,
      0.032817098,
      0.032988055,
      0.00608806,
      0.0,
    ],
  };

  testCalc(testCase4);
  
});





describe("Example 5", () => {
  
  const testCase5: TestCalcCaseData = {
    inputSamples: new Map([
      [ 0, { tamizDiameter: 6.36, soilWeight: 30     } ],
      [ 1, { tamizDiameter: 4.76, soilWeight: 81   } ],
      [ 2, { tamizDiameter: 3.36, soilWeight: 85  } ],
      [ 3, { tamizDiameter: 2.0,  soilWeight: 84  } ],
      [ 4, { tamizDiameter: 1.0,  soilWeight: 73 } ],
      [ 5, { tamizDiameter: 0.5,  soilWeight: 83 } ],
      [ 6, { tamizDiameter: 0.25, soilWeight: 32  } ],
      [ 7, { tamizDiameter: 0.0,  soilWeight: 20 } ],
    ]),    
    MWDTotalExpected: 1.924866807,
    expectedWeight: 488,
    soilWeightsExpected: [
      5.56,
      4.06,
      2.68,
      1.5,
      0.75,
      0.375,
      0.125,
    ],
    soilPortionsExpected: [
      0.06147541,
      0.165983607,
      0.174180328,
      0.172131148,
      0.149590164,
      0.170081967,
      0.06557377,
      0.040983607,
    ],
    MWDsExpected: [
      0.34180328,
      0.673893444,
      0.466803279,
      0.258196722,
      0.112192623,
      0.063780738,
      0.008196721,
      0.0,
    ],
  };

  testCalc(testCase5);
  
});
