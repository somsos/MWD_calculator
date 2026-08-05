
import { TestCalcCaseData } from "../../src/app/core/internals/logic/CalculatorImpl_utils.spec";


export function testUICalc(cy: Cypress.cy, excelCase: TestCalcCaseData) {
    const result:string = excelCase.MWDTotalExpected.toString();

    const tamizDiameter = excelCase.inputSamples.get(0)?.tamizDiameter;
    const soilWeight = excelCase.inputSamples.get(0)?.soilWeight;

    if(!tamizDiameter) {
      throw new Error("opwIYzffuR1Nh");
    }

    if(!soilWeight) {
      throw new Error("gotTnhIBwjKwE");
    }

    cy.visit('/').wait(500);

    cy.get("body").type(tamizDiameter.toString());
    cy.press(Cypress.Keyboard.Keys.TAB);
    cy.get("body").type(soilWeight.toString());

    //rest of samples
    for (let i = 1; i < excelCase.inputSamples.size; i++) {
      const sample = excelCase.inputSamples.get(i);
      if (sample == undefined) {
        throw new Error("hlXpnj3i7vunO");
      }

      cy.press(Cypress.Keyboard.Keys.TAB);
      cy.get("body").type(sample.tamizDiameter.toString());
    
      cy.press(Cypress.Keyboard.Keys.TAB);
      cy.get("body").type(sample.soilWeight.toString());
    }

    cy.get("#btn-calculate").click();

    cy.get("#text-result").contains(result);
}


