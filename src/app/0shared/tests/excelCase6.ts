import { TestCalcCaseData } from "../internals/types/TestCalcCaseData";
import { baseDiaTamizExcel } from "./baseDiaTamizExcel";

export const excelCase6: TestCalcCaseData = {
    inputSamples: new Map([
      [ 0, { tamizDiameter: baseDiaTamizExcel[0], soilWeight: 57  } ],
      [ 1, { tamizDiameter: baseDiaTamizExcel[1], soilWeight: 3   } ],
      [ 2, { tamizDiameter: baseDiaTamizExcel[2], soilWeight: 8   } ],
      [ 3, { tamizDiameter: baseDiaTamizExcel[3],  soilWeight: 14  } ],
      [ 4, { tamizDiameter: baseDiaTamizExcel[4],  soilWeight: 21  } ],
      [ 5, { tamizDiameter: baseDiaTamizExcel[5],  soilWeight: 59  } ],
      [ 6, { tamizDiameter: baseDiaTamizExcel[6], soilWeight: 89  } ],
      [ 7, { tamizDiameter: baseDiaTamizExcel[7],  soilWeight: 248 } ],
    ]),    
    
    MWDTotalExpected: 0.842765531062,
    
    //498
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
      0.114228456914,
      0.006012024048,
      0.016032064128,
      0.028056112224,
      0.042084168337,
      0.118236472946,
      0.178356713427,
      0.496993987976,
    ],
  
    MWDsExpected: [
      0.635110220442,
      0.024408817635,
      0.042965931863,
      0.042084168336,
      0.031563126253,
      0.044338677355,
      0.022294589178,
      0,
    ],
  };