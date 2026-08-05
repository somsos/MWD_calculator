import { testUICalc } from "./CyHelper";

describe('Using examples from the Excel', () => {

  it('Excel example 1', async () => {
    const excelCase1 =  (await import("../../src/app/0shared/tests/ex1Excel")).excelCase1;
    testUICalc(cy, excelCase1)
  });

  it('Excel example 2', async () => {
    const excelCase2 =  (await import("../../src/app/0shared/tests/ex2Excel")).excelCase2;
    testUICalc(cy, excelCase2);
  });

  it('Excel example 3', async () => {
    const excelCase3 =  (await import("../../src/app/0shared/tests/ex3Excel")).excelCase3;
    testUICalc(cy, excelCase3)
  });

  it('Excel example 4', async () => {
    const excelCase4 =  (await import("../../src/app/0shared/tests/ex4Excel")).excelCase4;
    testUICalc(cy, excelCase4)
  });


  it('Excel example 5', async () => {
    const excelCase5 =  (await import("../../src/app/0shared/tests/ex5Excel")).excelCase5;
    testUICalc(cy, excelCase5);
  });


  it('Excel example 6', async () => {
    const excelCase6 =  (await import("../../src/app/0shared/tests/ex6Excel")).excelCase6;
    testUICalc(cy, excelCase6);
  });

})
