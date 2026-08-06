import { TestCalcCaseData } from "../internals/types/TestCalcCaseData";
import { baseDiaTamizExcel } from "./baseDiaTamizExcel";


export const excelCase1: TestCalcCaseData = {
    inputSamples: new Map([
        [0, { tamizDiameter: baseDiaTamizExcel[0], soilWeight: 30 }],
        [1, { tamizDiameter: baseDiaTamizExcel[1], soilWeight: 81 }],
        [2, { tamizDiameter: baseDiaTamizExcel[2], soilWeight: 85 }],
        [3, { tamizDiameter: baseDiaTamizExcel[3], soilWeight: 84 }],
        [4, { tamizDiameter: baseDiaTamizExcel[4], soilWeight: 73 }],
        [5, { tamizDiameter: baseDiaTamizExcel[5], soilWeight: 83 }],
        [6, { tamizDiameter: baseDiaTamizExcel[6], soilWeight: 32 }],
        [7, { tamizDiameter: baseDiaTamizExcel[7], soilWeight: 20 }],
    ]),
    MWDTotalExpected: 1.924866803276,
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
        0.061475409836,
        0.165983606557,
        0.174180327869,
        0.172131147541,
        0.149590163934,
        0.170081967213,
        0.065573770492,
        0.040983606557,
    ],
    MWDsExpected: [
        0.341803278688,
        0.673893442621,
        0.466803278689,
        0.258196721312,
        0.11219262295,
        0.063780737705,
        0.008196721311,
        0.0
    ],
};

