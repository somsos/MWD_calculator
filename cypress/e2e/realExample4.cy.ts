import { ISample, inputAllSamples } from "./CyHelper";

describe('General working', () => {

  it('Real Example 1', () => {
    const happyPathSample: ISample[] = [
      { tamizDiameter: "6.25",  soilWeight: "0.0" },
      { tamizDiameter: "4.75",  soilWeight: "5.6" },
      { tamizDiameter: "2,",  soilWeight: "14.3" },
      { tamizDiameter: "0.25",  soilWeight: "29.3" },
      { tamizDiameter: "0.125",  soilWeight: "30.33" },
      { tamizDiameter: "0.25",  soilWeight: "38.11" },
      { tamizDiameter: "0.05",  soilWeight: "42.2" },
      { tamizDiameter: "0.0",  soilWeight: "13.45" },
    ];
    const result:string = "0.305497286";

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