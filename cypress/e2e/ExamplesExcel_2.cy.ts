import { testUICalc } from "./CyHelper";

describe('Using examples from the Excel', () => {

  it('Excel example 2', async () => {
    const excelCase2 =  (await import("../../src/app/0shared/tests/excelCase2")).excelCase2;
    testUICalc(cy, excelCase2);
  });

})
