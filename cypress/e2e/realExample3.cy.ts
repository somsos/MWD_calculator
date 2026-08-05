import { ISample, inputAllSamples } from "./CyHelper";

describe('General working', () => {

  it('Real Example 1', () => {
    const happyPathSample: ISample[] = [
      { tamizDiameter: "7.0",  soilWeight: "0.0" },
      { tamizDiameter: "3.5",  soilWeight: "4.4" },
      { tamizDiameter: "1.0",  soilWeight: "19.3" },
      { tamizDiameter: "0.5",  soilWeight: "30.9" },
      { tamizDiameter: "0.25",  soilWeight: "36.1" },
      { tamizDiameter: "0.25",  soilWeight: "31.31" },
      { tamizDiameter: "0.053",  soilWeight: "39.45" },
      { tamizDiameter: "0.0",  soilWeight: "21.05" },
    ]
    const result:string = "0.278211549";

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