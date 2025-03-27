import { expect, test, beforeEach, describe } from '@jest/globals';

import { CalculatorImpl, ICalculator } from "../src/app/core";
import { MapSamples } from '../src/app/0shared';



describe("ICalculator", () => {
  const samplesRows1: MapSamples = new Map([
    [0, {soilWeight: 1, tamizDiameter: 10}],
    [1, {soilWeight: 2, tamizDiameter: 11}],
    [2, {soilWeight: 3, tamizDiameter: 12}],
    [3, {soilWeight: 4, tamizDiameter: 13}],
    [4, {soilWeight: 5, tamizDiameter: 14}],
    [5, {soilWeight: 6, tamizDiameter: 15}],
    [6, {soilWeight: 7, tamizDiameter: 16}],
    [7, {soilWeight: 8, tamizDiameter: 17}],
]);

  let calc: ICalculator;
  beforeEach(()=> {
    calc = new CalculatorImpl();
    calc.setData(samplesRows1);
  })

  test("hello", () => {
    expect(calc.hello("foo")).toEqual("Hello foo");
  });

  test("calcTotalSoilWeight", () => {
    const totalSoilWeight: number = calc.calcTotalSoilWeight();
    expect(36).toEqual(totalSoilWeight);
  });


  test("calcTamizDiameterProm()", () => {
    const soilWeightsGot: Array<number> = calc.calcTamizDiameterProm();
    const soilWeightsExpected = [ 10.5, 11.5, 12.5, 13.5, 14.5, 15.5, 16.5 ]

    //console.log("soilWeightsGot", soilWeightsGot);
    //console.log("soilWeightsExpected", soilWeightsExpected);


    expect(soilWeightsGot.length).toEqual(soilWeightsExpected.length);


    for (let i = 0; i < soilWeightsGot.length; i++) {
      const got = soilWeightsGot[i];
      const expected = soilWeightsExpected[i];
      expect(got).toEqual(expected);
    }

  });


  test("calcSoilPortions()", () => {
    // Expected
    const soilPortionsExpected = [
      // 0.027777778, //Careful: the length is 1 less that the samples
      0.055555556,
      0.083333333,
      0.111111111,
      0.138888889,
      0.166666667,
      0.194444444,
      0.222222222,
    ];

    // Test / Got
    const soilPortionsGot = calc.calcSoilPortions();

    console.log("soilPortionsExpected", soilPortionsExpected);
    console.log("soilPortionsGot", soilPortionsGot);

    // Assert
    expect(soilPortionsGot.length).toEqual(soilPortionsExpected.length);

    for (let i = 0; i < soilPortionsGot.length; i++) {
      const got = soilPortionsGot[i];
      const expected = soilPortionsExpected[i];
      expect(got).toEqual(expected);
    }

  });



  test("calcMWDs()", () => {
    // Expected
    const MWDsExpected = [
      0.583333338,
      0.958333329, // careful: fix the precision to 9 decimals (check comparison of every item)
      1.388888888,
      1.875000002,
      2.416666672,
      3.013888882,
      3.666666663,
    ]

    // Test / Got
    const MWDsGot = calc.calcMWDs();
    console.log("MWDsExpected", MWDsExpected);
    console.log("MWDsGot", MWDsGot);


    // Assert
    expect(MWDsGot.length).toEqual(MWDsExpected.length);

    for (let i = 0; i < MWDsGot.length; i++) {
      const got = MWDsGot[i].toFixed(7);
      const expected = MWDsExpected[i].toFixed(7); //OBSERVE: that we reduce the precision to avoid exaggerated comparison

      expect(got).toEqual(expected);
    }


  });

  test("calcMWDTotal()", () => {
    // Expected
    const MWDTotalExpected = 13.902777774;

    // Test / Got
    const MWDTotal = calc.calcMWDTotal();

    // Assert
    const FixedMWDTotalExpected = Number(MWDTotalExpected.toFixed(7));
    const FixedMWDTotal = Number(MWDTotal.toFixed(7));
    expect(FixedMWDTotal).toEqual(FixedMWDTotalExpected);

  });

})



/*

1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/
