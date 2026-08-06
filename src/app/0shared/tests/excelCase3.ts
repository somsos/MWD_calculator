import { TestCalcCaseData } from "../internals/types/TestCalcCaseData";
import { baseDiaTamizExcel } from "./baseDiaTamizExcel";


export const excelCase3: TestCalcCaseData = {
    inputSamples: new Map([
        [0, { tamizDiameter: baseDiaTamizExcel[0], soilWeight: 4 }],
        [1, { tamizDiameter: baseDiaTamizExcel[1], soilWeight: 54 }],
        [2, { tamizDiameter: baseDiaTamizExcel[2], soilWeight: 59 }],
        [3, { tamizDiameter: baseDiaTamizExcel[3], soilWeight: 75 }],
        [4, { tamizDiameter: baseDiaTamizExcel[4], soilWeight: 75 }],
        [5, { tamizDiameter: baseDiaTamizExcel[5], soilWeight: 113 }],
        [6, { tamizDiameter: baseDiaTamizExcel[6], soilWeight: 62 }],
        [7, { tamizDiameter: baseDiaTamizExcel[7], soilWeight: 40 }],
    ]),

    MWDTotalExpected: 1.283143153528,

    expectedWeight: 482,


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
        0.008298755187,
        0.112033195021,
        0.122406639004,
        0.155601659751,
        0.155601659751,
        0.234439834025,
        0.128630705394,
        0.082987551867,
    ],


    MWDsExpected: [
        0.04614107884,
        0.454854771785,
        0.328049792531,
        0.233402489626,
        0.116701244813,
        0.087914937759,
        0.016078838174,
        0.0
    ],
};

