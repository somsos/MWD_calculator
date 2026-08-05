import { ISample, inputAllSamples } from "./CyHelper";

describe('General working', () => {

  it('Real Example 1', () => {
    const happyPathSample: ISample[] = [
      { tamizDiameter: "6.36", soilWeight: "30" },
      { tamizDiameter: "4.76", soilWeight: "81" },
      { tamizDiameter: "3.36", soilWeight: "85" },
      { tamizDiameter: "2.0",  soilWeight: "84" },
      { tamizDiameter: "1.0",  soilWeight: "73" },
      { tamizDiameter: "0.5",  soilWeight: "83" },
      { tamizDiameter: "0.25", soilWeight: "32" },
      { tamizDiameter: "0.0",  soilWeight: "20" },
    ]
    const result:string = "1.924866807";

    cy.visit('/').wait(500);

    // need to check if automatically focus the first input.
    cy.get("body").type(happyPathSample[0].tamizDiameter);
    cy.press(Cypress.Keyboard.Keys.TAB);
    cy.get("body").type(happyPathSample[0].soilWeight);
    happyPathSample.shift();

    //rest of samples

    inputAllSamples(happyPathSample);

    cy.get("#btn-calculate").click();

    cy.get("#text-result").contains(result);

  })

});