import { testUICalc } from "./CyHelper";

describe('Using examples from the Excel', () => {

  it('Excel example 3', async () => {
    const excelCase3 =  (await import("../../src/app/0shared/tests/excelCase3")).excelCase3;
    testUICalc(cy, excelCase3)
  });

})
