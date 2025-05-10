import { MapSamples } from "../../../0shared";
import { CalculatorImpl } from "./CalculatorImpl";
import { ICalculator } from "./ICalculator";
import {describe, expect, test} from '@jest/globals';



describe("ICalculator", () => {
  const samplesRows1: MapSamples = new Map([
    [ 0, { tamizDiameter: 10.0,  soilWeight: 0.    }  ],
    [ 1, { tamizDiameter: 7.0,   soilWeight: 5.5   }  ],
    [ 2, { tamizDiameter: 5.5,   soilWeight: 0.25  }  ],
    [ 3, { tamizDiameter: 4.4,   soilWeight: 20.11 }  ],
    [ 4, { tamizDiameter: 1.1,   soilWeight: 31.50 }  ],
    [ 5, { tamizDiameter: 0.25,  soilWeight: 10.05 }  ],
    [ 6, { tamizDiameter: 0.10,  soilWeight: 35.10 }  ],
    [ 7, { tamizDiameter: 0.05,  soilWeight: 15.22 }  ],
  ]);

  let calc: ICalculator;
  beforeEach(()=> {
    calc = new CalculatorImpl();
    calc.setData(samplesRows1);
  })

  test("calcTotalSoilWeight", () => {
    const expectedWeight = 117.73;
    const expectedGot: number = Number(calc.calcTotalSoilWeight().toFixed(2));
    expect(expectedGot).toEqual(expectedWeight);
  });


  test("calcTamizDiameterProm()", () => {
    // expected
    const soilWeightsExpected = [
      8.5,
      6.25,
      4.95,
      2.75,
      0.675,
      0.175,
      0.075,
    ]

    // Test
    const tamizDiameterPromGot: Array<number> = calc.calcTamizDiameterProm();

    //console.log("soilWeightsGot", soilWeightsGot);
    //console.log("soilWeightsExpected", soilWeightsExpected);

    expect(tamizDiameterPromGot.length).toEqual(soilWeightsExpected.length);


    for (let i = 0; i < tamizDiameterPromGot.length; i++) {
      const got = Number(tamizDiameterPromGot[i].toFixed(3));
      const expected = soilWeightsExpected[i];
      expect(got).toEqual(expected);
    }

  });






  test("calcSoilPortions()", () => {
    // Expected
    const soilPortionsExpected = [
      // 0.027777778, //Careful: the length is 1 less that the samples
      0.046717064,
      0.002123503,
      0.170814576,
      0.267561369,
      0.085364818,
      0.298139811,
      0.129278858,
    ];

    // Test / Got
    const soilPortionsGot = calc.calcSoilPortions();

    //console.log("soilPortionsExpected", soilPortionsExpected);
    //console.log("soilPortionsGot", soilPortionsGot);

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
      0.397095044,
      0.013271894,
      0.845532151,
      0.735793765,
      0.057621252,
      0.052174467,
      0.009695914,
    ]

    // Test / Got
    const MWDsGot = calc.calcMWDs();
    //console.log("MWDsExpected", MWDsExpected);
    //console.log("MWDsGot", MWDsGot);


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
    const MWDTotalExpected = 2.11;

    // Test / Got
    const MWDTotal = calc.calcMWDTotal();

    // Assert
    const FixedMWDTotal = Number(MWDTotal.toFixed(2));
    expect(FixedMWDTotal).toEqual(MWDTotalExpected);

  });

})
