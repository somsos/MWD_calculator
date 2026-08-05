import { testUICalc } from "./CyHelper";

describe('Using examples from the Excel', () => {


  it('Excel example 6', async () => {
    const excelCase6 =  (await import("../../src/app/0shared/tests/excelCase6")).excelCase6;
    testUICalc(cy, excelCase6);
  });

})
