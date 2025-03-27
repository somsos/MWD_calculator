import { IResultsDto, MapSamples, ResultsDtoUtils } from "../../../src/app/0shared";
import { IInputDriver } from "../../../src/app/core";
import { InputDriverImpl } from "../../../src/app/core/internals/inputDriver/impl/InputDriverImpl";

interface Case {
  input: MapSamples,
  outputExpected: IResultsDto,
}

const testCases: Case[] = [
  {
    input: new Map([
      [ 0, { tamizDiameter: 10.0,  soilWeight: 0.    }  ],
      [ 1, { tamizDiameter: 7.0,   soilWeight: 5.5   }  ],
      [ 2, { tamizDiameter: 5.5,   soilWeight: 0.25  }  ],
      [ 3, { tamizDiameter: 4.4,   soilWeight: 20.11 }  ],
      [ 4, { tamizDiameter: 1.1,   soilWeight: 31.50 }  ],
      [ 5, { tamizDiameter: 0.25,  soilWeight: 10.05 }  ],
      [ 6, { tamizDiameter: 0.10,  soilWeight: 35.10 }  ],
      [ 7, { tamizDiameter: 0.05,  soilWeight: 15.22 }  ],
    ]),
    outputExpected: {
      totalSoilWeight: 117.73,
      MWDTotal: 2.11,
      tamizDiameterProm: [ 8.5, 6.25, 4.95, 2.75, 0.675, 0.175, 0.075, ],
      soilPortions: [ 0.046717064, 0.002123503, 0.170814576, 0.267561369, 0.085364818, 0.298139811, 0.129278858, ],
      MWDs: [ 0.397095044, 0.013271894, 0.845532151, 0.735793765, 0.057621252, 0.052174467, 0.009695914, ],
    },
  }
]

describe("InputDriverImpl", () => {

  let inDr: IInputDriver;
  beforeEach(()=> {
    inDr = new InputDriverImpl();
  })


  test("get results form study", () => {
    const resultsCalculated:IResultsDto = inDr.resolveSamples(testCases[0].input);
    ResultsDtoUtils.areEquals(resultsCalculated, testCases[0].outputExpected);
  });

})
