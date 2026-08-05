import { TestCalcCaseData } from "../../core/internals/logic/CalculatorImpl_utils.spec";
import { baseDiaTamizExcel } from "./baseDiaTamizExcel";

export const excelCase5: TestCalcCaseData = {
    inputSamples: new Map([
      [ 0, { tamizDiameter: baseDiaTamizExcel[0], soilWeight: 18  } ],
      [ 1, { tamizDiameter: baseDiaTamizExcel[1], soilWeight: 2   } ],
      [ 2, { tamizDiameter: baseDiaTamizExcel[2], soilWeight: 9   } ],
      [ 3, { tamizDiameter: baseDiaTamizExcel[3],  soilWeight: 14  } ],
      [ 4, { tamizDiameter: baseDiaTamizExcel[4],  soilWeight: 25  } ],
      [ 5, { tamizDiameter: baseDiaTamizExcel[5],  soilWeight: 75  } ],
      [ 6, { tamizDiameter: baseDiaTamizExcel[6], soilWeight: 90  } ],
      [ 7, { tamizDiameter: baseDiaTamizExcel[7],  soilWeight: 266 } ],
    ]),    
    
    //0.44
    MWDTotalExpected: 0.423737474951,
    
    //497.6
    expectedWeight: 499,

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
      0.036072144289,
      0.004008016032,
      0.018036072144,
      0.028056112224,
      0.050100200401,
      0.150300601202,
      0.180360721443,
      0.533066132265,
    ],

    MWDsExpected: [
      0.200561122247,
      0.01627254509,
      0.048336673346,
      0.042084168336,
      0.037575150301,
      0.056362725451,
      0.02254509018,
      0.0,
    ],
  };