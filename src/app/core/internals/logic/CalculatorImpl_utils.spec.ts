import { IRowSample, MapSamples } from "../../../0shared";
import { NumberUtils } from "../../../0shared/internals/utils/NumberUtils";
import { CalculatorImpl } from "./CalculatorImpl";
import { ICalculator } from "./ICalculator";



export function testCalc(
  samples: MapSamples,
  expectedWeight: number,
  soilWeightsExpected: number[],
  soilPortionsExpected: number[],
  MWDsExpected: number[],
  MWDTotalExpected: number) 
{

  adjustSample(samples);
  expectedWeight = NumberUtils.adjustPrecision(expectedWeight);
  soilWeightsExpected = soilWeightsExpected.map((value) => NumberUtils.adjustPrecision(value));
  soilPortionsExpected = soilPortionsExpected.map((value) => NumberUtils.adjustPrecision(value));
  MWDsExpected = MWDsExpected.map((value) => NumberUtils.adjustPrecision(value));
  MWDTotalExpected = NumberUtils.adjustPrecision(MWDTotalExpected);

  let calc: ICalculator;
  beforeEach(()=> {
    calc = new CalculatorImpl();
    calc.setData(samples);
  })

  it("calcTotalSoilWeight", () => {
    const getWeight: number = calc.calcTotalSoilWeight(); // Test / Got
    expect(getWeight).toEqual(expectedWeight);
  });


  it("calcTamizDiameterProm()", () => {
    const tamizDiameterPromGot: Array<number> = calc.calcTamizDiameterProm(); // Test / Got
    expect(tamizDiameterPromGot.length).toEqual(soilWeightsExpected.length);
    //console.log("soilWeightsExpected", soilWeightsExpected);
    //console.log("soilWeightsGot", tamizDiameterPromGot);
    for (let i = 0; i < tamizDiameterPromGot.length; i++) {
      const TD_got = tamizDiameterPromGot[i];
      const TD_expected = soilWeightsExpected[i];
      expect(TD_got).toEqual(TD_expected);
    }
  });


  it("calcSoilPortions()", () => {
    const soilPortionsGot = calc.calcSoilPortions();// Test / Got
    //console.log("soilPortionsExpected", soilPortionsExpected);
    //console.log("soilPortionsGot", soilPortionsGot);
    expect(soilPortionsGot.length).toEqual(soilPortionsExpected.length);
    for (let i = 0; i < soilPortionsGot.length; i++) {
      const SP_got = soilPortionsGot[i];
      const SP_Expected = soilPortionsExpected[i];
      expect(SP_got).toEqual(SP_Expected);
    }
  });



  it("calcMWDs()", () => {
    const MWDsGot = calc.calcMWDs();  // Test / Got
    //console.log("MWDsExpected", MWDsExpected);
    //console.log("MWDsGot", MWDsGot);
    expect(MWDsGot.length).toEqual(MWDsExpected.length);
    for (let i = 0; i < MWDsGot.length; i++) {
      const MWDGot = MWDsGot[i];
      const MWDExpected = MWDsExpected[i];
      expect(MWDGot).toEqual(MWDExpected);
    }
  });

  it("calcMWDTotal()", () => {
    const MWDTotal = calc.calcMWDTotal(); // Test / Got
    expect(MWDTotal).toEqual(MWDTotalExpected);
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