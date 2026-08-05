import { testCalc } from "./CalculatorImpl_utils.spec";



describe("Excel Example 1", async () => {
  const excelCase1 = (await import( "../../../0shared/tests/excelCase1")).excelCase1;
  testCalc(excelCase1);
});

describe("Excel Example 2", async () => {
  const excelCase2 = (await import( "../../../0shared/tests/excelCase2")).excelCase2;
  testCalc(excelCase2);
});

describe("Excel Example 3", async () => {
  const excelCase3 = (await import( "../../../0shared/tests/excelCase3")).excelCase3;
  testCalc(excelCase3);
});

describe("Excel Example 4", async () => {
  const excelCase4 = (await import( "../../../0shared/tests/excelCase4")).excelCase4;
  testCalc(excelCase4);
});

describe("Excel Example 5", async () => {
  const excelCase5 = (await import( "../../../0shared/tests/excelCase5")).excelCase5;
  testCalc(excelCase5);
});

describe("Excel Example 6", async () => {
  const excelCase6 = (await import( "../../../0shared/tests/excelCase6")).excelCase6;
  testCalc(excelCase6);
});
