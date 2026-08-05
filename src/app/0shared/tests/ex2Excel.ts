import { TestCalcCaseData } from "../../core/internals/logic/CalculatorImpl_utils.spec";
import { baseDiaTamizExcel } from "./baseDiaTamizExcel";


export const excelCase2: TestCalcCaseData = {
    inputSamples: new Map([
        [0, { tamizDiameter: baseDiaTamizExcel[0], soilWeight: 26 }],
        [1, { tamizDiameter: baseDiaTamizExcel[1], soilWeight: 87 }],
        [2, { tamizDiameter: baseDiaTamizExcel[2], soilWeight: 70 }],
        [3, { tamizDiameter: baseDiaTamizExcel[3], soilWeight: 79 }],
        [4, { tamizDiameter: baseDiaTamizExcel[4], soilWeight: 70 }],
        [5, { tamizDiameter: baseDiaTamizExcel[5], soilWeight: 86 }],
        [6, { tamizDiameter: baseDiaTamizExcel[6], soilWeight: 42 }],
        [7, { tamizDiameter: baseDiaTamizExcel[7], soilWeight: 7 }],
    ]),

    MWDTotalExpected: 1.914089935759,

    expectedWeight: 467,

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
        0.055674518201,
        0.186295503212,
        0.149892933619,
        0.169164882227,
        0.149892933619,
        0.184154175589,
        0.089935760171,
        0.014989293362,
    ],

    MWDsExpected: [
        0.309550321198,
        0.756359743041,
        0.401713062099,
        0.25374732334,
        0.112419700214,
        0.069057815846,
        0.011241970021,
        0.0,
    ],
};
