import { MapSamples } from "../../../0shared";
import { CalculatorImpl } from "./CalculatorImpl";
import { ICalculator } from "./ICalculator";




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
  // It's the sum of all the soilWeight values
  const expectedWeight = 190.02; // 0.0 + 3.4 + 21.26 + 34.73 + 35.69 + 31.31 + 38.26 + 25.37;
  
  // It's the sum of the 2 tamizDiameter values divided by 2 in sequence,
  const soilWeightsExpected = [
    6.0000, // (8.0 + 4.0) / 2 = 6.0
    3.0000, // (4.0 + 2.0) / 2 = 3.0
    1.5000, // (2.0 + 1.0) / 2 = 1.5
    0.7500, // (1.0 + 0.5) / 2 = 0.75
    0.3750, // (0.5 + 0.25) / 2 = 0.375
    0.1515, // (0.25 + 0.053) / 2 = 0.1515
    0.0265, // (0.053 + 0.0) / 2 = 0.0265
  ];        // 0.0
  
  // CAREFUL: These are intermediate values, are not part of the results to show to the user.
  // It's the soilWeight divided by the expectedWeight in sequence.
  const soilPortionsExpected = [
    0.0,         // 0.0 / 190.02 = 0.0
    0.017892853, // 3.4 / 190.02 = 0.017892853
    0.11188296,  // 21.26 / 190.02 = 0.1118829
    0.182770235, // 34.73 / 190.02 = 0.182770234712
    0.187822334, // 35.69 / 190.02 = 0.187822334491
    0.164772129, // 31.31 / 190.02 = 0.16477212925
    0.201347227, // 38.26 / 190.02 = 0.201347226608
    0.133512262, // 25.37 / 190.02 = 0.133512261867
  ];

  // CAREFUL: A cero is added at the end so soilWeightsExpected and soilPortionsExpected
  // match the array length.
  const MWDsExpected = [
    0.166666668,     // 6.0000 * 0.027777778 = 0.166666668
    0.053678559,     // 3.0000 * 0.017892853 = 0.053678559
    0.16782444,      // 1.5000 * 0.111882960 = 0.16782444
    0.13707767625,   // 0.7500 * 0.182770235 = 0.13707767625
    0.07043337525,   // 0.3750 * 0.187822334 = 0.07043337525
    0.0249629775435, // 0.1515 * 0.164772129 = 0.0249629775435
    0.0053357015155, // 0.0265 * 0.201347227 = 0.0053357015155
    0,               // 0.0    * 0.133512262 = 0.0
  ];

  // 6 * 0 = 0
  // 3 * 0.017892853 = 0.053678559
  // 1.5 * 0.11188296 = 0.16782444000000002
  // 0.75 * 0.182770235 = 0.13707767625
  // 0.375 * 0.187822334 = 0.07043337525
  // 0.1515 * 0.164772129 = 0.0249629775435
  // 0.0265 * 0.201347227 = 0.0053357015154999994
  // 0 * 0.133512262 = 0

  // 0.625979397559 = 0.166666668 + 0.053678559 + 0.16782444 + 0.13707767625 + 0.07043337525 + 0.0249629775435 + 0.0053357015155
  const MWDTotalExpected = 0.625979397559;



  


  let calc: ICalculator;
  beforeEach(()=> {
    calc = new CalculatorImpl();
    calc.setData(samplesRows1);
  })

  it("calcTotalSoilWeight", () => {
    const getWeight: number = calc.calcTotalSoilWeight(); // Test / Got
    expect(getWeight).toEqual(expectedWeight);
  });


  it("calcTamizDiameterProm()", () => {
    const tamizDiameterPromGot: Array<number> = calc.calcTamizDiameterProm(); // Test / Got
    expect(tamizDiameterPromGot.length).toEqual(soilWeightsExpected.length);
    //console.log("tamizDiameterPromGot", tamizDiameterPromGot);
    //console.log("soilWeightsExpected", soilWeightsExpected);
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

})