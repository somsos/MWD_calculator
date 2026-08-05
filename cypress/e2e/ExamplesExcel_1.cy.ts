import { testUICalc } from "./CyHelper";

describe('Using examples from the Excel', () => {

  it('Excel example 1', async () => {
    const excelCase1 =  (await import("../../src/app/0shared/tests/excelCase1")).excelCase1;
    testUICalc(cy, excelCase1)
  });

})
