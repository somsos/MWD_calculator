import { TestCalcCaseData } from "../internals/types/TestCalcCaseData";
import { baseDiaTamizExcel } from "./baseDiaTamizExcel";


export const excelCase4: TestCalcCaseData = {
    inputSamples: new Map([
      [ 0, { tamizDiameter: baseDiaTamizExcel[0], soilWeight: 33  } ],
      [ 1, { tamizDiameter: baseDiaTamizExcel[1], soilWeight: 2   } ],
      [ 2, { tamizDiameter: baseDiaTamizExcel[2], soilWeight: 10  } ],
      [ 3, { tamizDiameter: baseDiaTamizExcel[3],  soilWeight: 21  } ],
      [ 4, { tamizDiameter: baseDiaTamizExcel[4],  soilWeight: 30  } ],
      [ 5, { tamizDiameter: baseDiaTamizExcel[5],  soilWeight: 82  } ],
      [ 6, { tamizDiameter: baseDiaTamizExcel[6], soilWeight: 89  } ],
      [ 7, { tamizDiameter: baseDiaTamizExcel[7],  soilWeight: 231 } ],
    ]),    
    
    MWDTotalExpected: 0.631074297189,
    
    expectedWeight: 498,

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
      0.066265060241,
      0.004016064257,
      0.020080321285,
      0.042168674699,
      0.060240963855,
      0.164658634538,
      0.178714859438,
      0.463855421687,
    ],

    MWDsExpected: [
      0.36843373494,
      0.016305220883,
      0.053815261044,
      0.063253012049,
      0.045180722891,
      0.061746987952,
      0.02233935743,
      0.0,
    ],
  };
