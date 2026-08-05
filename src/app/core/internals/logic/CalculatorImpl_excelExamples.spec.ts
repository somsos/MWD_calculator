import { testCalc } from "./CalculatorImpl_utils.spec";



describe("Excel Example 1", async () => {
  const excelCase1 = (await import( "../../../0shared/tests/ex1Excel")).excelCase1;
  testCalc(excelCase1);
});

describe("Excel Example 2", async () => {
  const excelCase2 = (await import( "../../../0shared/tests/ex2Excel")).excelCase2;
  testCalc(excelCase2);
});

describe("Excel Example 3", async () => {
  const excelCase3 = (await import( "../../../0shared/tests/ex3Excel")).excelCase3;
  testCalc(excelCase3);
});

describe("Excel Example 4", async () => {
  const excelCase4 = (await import( "../../../0shared/tests/ex4Excel")).excelCase4;
  testCalc(excelCase4);
});

describe("Excel Example 5", async () => {
  const excelCase5 = (await import( "../../../0shared/tests/ex5Excel")).excelCase5;
  testCalc(excelCase5);
});

describe("Excel Example 6", async () => {
  const excelCase6 = (await import( "../../../0shared/tests/ex6Excel")).excelCase6;
  testCalc(excelCase6);
});
