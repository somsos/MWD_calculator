import { IRowSample, MapSamples } from "../../../0shared";
import { TestCalcCaseData } from "../../../0shared/internals/types/TestCalcCaseData";
import { NumberUtils } from "../../../0shared/internals/utils/NumberUtils";
import { CalculatorImpl } from "./CalculatorImpl";
import { ICalculator } from "./ICalculator";




export function testCalc(tCase: TestCalcCaseData) {

  adjustSample(tCase.inputSamples);
  tCase.expectedWeight = NumberUtils.adjustPrecision(tCase.expectedWeight);
  tCase.soilWeightsExpected = tCase.soilWeightsExpected.map((value) => NumberUtils.adjustPrecision(value));
  tCase.soilPortionsExpected = tCase.soilPortionsExpected.map((value) => NumberUtils.adjustPrecision(value));
  tCase.MWDsExpected = tCase.MWDsExpected.map((value) => NumberUtils.adjustPrecision(value));
  tCase.MWDTotalExpected = NumberUtils.adjustPrecision(tCase.MWDTotalExpected);

  let calc: ICalculator;
  beforeEach(()=> {
    calc = new CalculatorImpl();
    calc.setData(tCase.inputSamples);
  })

  it("calcTotalSoilWeight", () => {
    const getWeight: number = calc.calcTotalSoilWeight(); // Test / Got
    expect(getWeight).toEqual(tCase.expectedWeight);
  });


  it("calcTamizDiameterProm()", () => {
    const tamizDiameterPromGot: Array<number> = calc.calcTamizDiameterProm(); // Test / Got
    expect(tamizDiameterPromGot.length).toEqual(tCase.soilWeightsExpected.length);
    //console.log("soilWeightsExpected", soilWeightsExpected);
    //console.log("soilWeightsGot", tamizDiameterPromGot);
    for (let i = 0; i < tamizDiameterPromGot.length; i++) {
      const TD_got = tamizDiameterPromGot[i];
      const TD_expected = tCase.soilWeightsExpected[i];
      expect(TD_got).toEqual(TD_expected);
    }
  });


  it("calcSoilPortions()", () => {
    const soilPortionsGot = calc.calcSoilPortions();// Test / Got
    //console.log("soilPortionsExpected", soilPortionsExpected);
    //console.log("soilPortionsGot", soilPortionsGot);
    expect(soilPortionsGot.length).toEqual(tCase.soilPortionsExpected.length);
    for (let i = 0; i < soilPortionsGot.length; i++) {
      const SP_got = soilPortionsGot[i];
      const SP_Expected = tCase.soilPortionsExpected[i];
      expect(SP_got).toEqual(SP_Expected);
    }
  });



  it("calcMWDs()", () => {
    const MWDsGot = calc.calcMWDs();  // Test / Got
    //console.log("MWDsExpected", MWDsExpected);
    //console.log("MWDsGot", MWDsGot);
    expect(MWDsGot.length).toEqual(tCase.MWDsExpected.length);
    for (let i = 0; i < MWDsGot.length; i++) {
      const MWDGot = MWDsGot[i];
      const MWDExpected = tCase.MWDsExpected[i];
      expect(MWDGot).toEqual(MWDExpected);
    }
  });

  it("calcMWDTotal()", () => {
    const MWDTotal = calc.calcMWDTotal(); // Test / Got
    expect(MWDTotal).toEqual(tCase.MWDTotalExpected);
  });

}


function adjustSample(samples: MapSamples): void {
  for (const [key, value] of samples.entries()) {
    const soilWeightAdjusted: number = NumberUtils.adjustPrecision(value?.soilWeight ?? 0);
    const soilTamizDiameter: number = NumberUtils.adjustPrecision(value?.tamizDiameter ?? 0);
    const adjustedSample: IRowSample = {
      soilWeight: soilWeightAdjusted,
      tamizDiameter: soilTamizDiameter
    };
    samples.set(key, adjustedSample);
  }
}