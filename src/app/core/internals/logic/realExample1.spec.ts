import { MapSamples } from "../../../0shared";
import { CalculatorImpl } from "./CalculatorImpl";
import { ICalculator } from "./ICalculator";




describe("ICalculator", () => {
  // precision = 9
  const samplesRows1: MapSamples = new Map([
    [ 0, { tamizDiameter: 10.0,  soilWeight: 0.0    }  ],
    [ 1, { tamizDiameter: 7.0,   soilWeight: 5.5   }  ],
    [ 2, { tamizDiameter: 5.5,   soilWeight: 0.25  }  ],
    [ 3, { tamizDiameter: 4.4,   soilWeight: 20.11 }  ],
    [ 4, { tamizDiameter: 1.1,   soilWeight: 31.50 }  ],
    [ 5, { tamizDiameter: 0.25,  soilWeight: 10.05 }  ],
    [ 6, { tamizDiameter: 0.10,  soilWeight: 35.10 }  ],
    [ 7, { tamizDiameter: 0.05,  soilWeight: 15.22 }  ],
  ]);
  
  // It's the sum of all the soilWeight values
  // 0.0 + 5.5 + 0.25 + 20.11 + 31.50 + 10.05 + 35.10 + 15.22 = 117.73
  const expectedWeight = 117.72999999999999;
  
  // It's the sum of the 2 tamizDiameter values divided by 2 in sequence,
  const soilWeightsExpected = [
    8.5,   // = (10.0 + 7.0) / 2  = 8.5
    6.25,  // = (7.0 + 5.5) / 2   = 6.25
    4.95,  // = (5.5 + 4.4) / 2   = 4.95
    2.75,  // = (4.4 + 1.1) / 2   = 2.75
    0.675, // = (1.1 + 0.25) / 2  = 0.675
    0.175, // = (0.25 + 0.10) / 2 = 0.175
    0.075, // = (0.10 + 0.05) / 2 = 0.075
  ]

  // CAREFUL: These are intermediate values, are not part of the results to show to the user.
  // It's the soilWeight divided by the expectedWeight in sequence.
  const soilPortionsExpected = [
  //0.027777778, // WRONG
    0.0,         // 0.0   / 117.73 = 0.0
    0.046717064, // 5.5   / 117.73 = 0.0467170644696
    0.002123503, // 0.25  / 117.73 = 0.00212350293043
    0.170814576, // 20.11 / 117.73 = 0.170814575724
    0.267561369, // 31.50 / 117.73 = 0.267561369235
    0.085364818, // 10.05 / 117.73 = 0.0853648178035
    0.298139811, // 35.10 / 117.73 = 0.298139811433
    0.129278858, // 15.22 / 117.73 = 0.129278858405
  ];

  // CAREFUL: A cero is added at the end so soilWeightsExpected and soilPortionsExpected
  // match the array length.
  const MWDsExpected = [
  //0.397095044, // WRONG
    0.0, // 8.5 * 0 = 0
    0.29198165, // 6.25 * 0.046717064 = 0.29198165
    0.01051134, // 4.95 * 0.002123503 = 0.01051133985
    0.469740084, // 2.75 * 0.170814576 = 0.469740084
    0.180603924, // 0.675 * 0.267561369 = 0.180603924075
    0.014938843, // 0.175 * 0.085364818 = 0.01493884315
    0.022360486, // 0.075 * 0.298139811 = 0.022360485825
    0.0        , // 0 * 0.129278858 = 0.0
  ];
  

  // It's the sum of all the MWDsExpected values
  // 0.397095044 + 0.013271894 + 0.845532151 + 0.735793765 + 0.057621252 + 0.052174467 + 0.009695914 + 0.0 = 0.9901363269
  const MWDTotalExpected = 0.990136327;





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
