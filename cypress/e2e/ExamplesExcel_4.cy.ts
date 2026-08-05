import { testUICalc } from "./CyHelper";

describe('Using examples from the Excel', () => {

  it('Excel example 4', async () => {
    const excelCase4 =  (await import("../../src/app/0shared/tests/excelCase4")).excelCase4;
    testUICalc(cy, excelCase4)
  });

})
