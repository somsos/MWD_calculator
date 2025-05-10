import { MapSamples } from "../../../0shared";
import { CalculatorImpl } from "./CalculatorImpl";
import { ICalculator } from "./ICalculator";
import {describe, expect, test} from '@jest/globals';



describe("ICalculator", () => {
  const samplesRows1: MapSamples = new Map([
    [ 0, { tamizDiameter: 8.0,   soilWeight:   0.0    }  ],
    [ 1, { tamizDiameter: 4.0,   soilWeight:   3.4    }  ],
    [ 2, { tamizDiameter: 2.0, soilWeight:   21.26  }  ],
    [ 3, { tamizDiameter: 1.0, soilWeight:   34.73  }  ],
    [ 4, { tamizDiameter: 0.5, soilWeight:   35.69  }  ],
    [ 5, { tamizDiameter: 0.25, soilWeight:  31.31  }  ],
    [ 6, { tamizDiameter: 0.053, soilWeight: 38.26  }  ],
    [ 7, { tamizDiameter: 0.0, soilWeight:   25.37  }  ],
  ]);

  let calc: ICalculator;
  beforeEach(()=> {
    calc = new CalculatorImpl();
    calc.setData(samplesRows1);
  })

  test("calcTotalSoilWeight", () => {
    const expectedWeight = 0.0 + 3.4 + 21.26 + 34.73 + 35.69 + 31.31 + 38.26 + 25.37;
    const expectedGot: number = calc.calcTotalSoilWeight();
    expect(expectedGot).toEqual(expectedWeight);
  });


  test("calcTamizDiameterProm()", () => {
    // expected
    const soilWeightsExpected = [
      6.0000,
      3.0000,
      1.5000,
      0.7500,
      0.3750,
      0.1515,
      0.0265,
    ]

    // Test
    const tamizDiameterPromGot: Array<number> = calc.calcTamizDiameterProm();

    //console.log("soilWeightsGot", soilWeightsGot);
    //console.log("soilWeightsExpected", soilWeightsExpected);

    expect(tamizDiameterPromGot.length).toEqual(soilWeightsExpected.length);


    for (let i = 0; i < tamizDiameterPromGot.length; i++) {
      const got = tamizDiameterPromGot[i];
      const expected = soilWeightsExpected[i];
      expect(got).toEqual(expected);
    }

  });


  test("calcSoilPortions()", () => {
    // Expected
    const soilPortionsExpected = [
      // 0.027777778, //Careful: the length is 1 less that the samples
      0.017892853,
      0.111882960,
      0.182770235,
      0.187822334,
      0.164772129,
      0.201347227,
      0.133512262
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
      0.107357118,
      0.335648880,
      0.274155353,
      0.140866750,
      0.061789548,
      0.030504105,
      0.003538075
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
    const MWDTotalExpected = 0.95;

    // Test / Got
    const MWDTotal = calc.calcMWDTotal();

    // Assert
    const FixedMWDTotal = Number(MWDTotal.toFixed(2));
    expect(FixedMWDTotal).toEqual(MWDTotalExpected);

  });

})
