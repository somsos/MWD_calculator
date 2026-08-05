import { testUICalc } from "./CyHelper";

describe('Using examples from the Excel', () => {

  it('Excel example 5', async () => {
    const excelCase5 =  (await import("../../src/app/0shared/tests/excelCase5")).excelCase5;
    testUICalc(cy, excelCase5);
  });

})
