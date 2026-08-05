/*
import { inputAllSamples, ISample } from "./CyHelper";

describe('General use', () => {

  it('My example 1', () => {
    const happyPathSample: ISample[] = [
      { tamizDiameter: "8.0", soilWeight: "0.0" },
      { tamizDiameter: "4.0", soilWeight: "3.4" },
      { tamizDiameter: "2.0", soilWeight: "21.26" },
      { tamizDiameter: "1.0",  soilWeight: "34.73" },
      { tamizDiameter: "0.5",  soilWeight: "35.69" },
      { tamizDiameter: "0.25",  soilWeight: "31.31" },
      { tamizDiameter: "0.053", soilWeight: "38.26" },
      { tamizDiameter: "0.0",  soilWeight: "25.37" },
    ]
    const result:string = "0.45931273";

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



  it('My example 2', () => {
    const happyPathSample: ISample[] = [
      { tamizDiameter: "10.0",  soilWeight: "0.0" },
      { tamizDiameter: "7.0",  soilWeight: "5.5" },
      { tamizDiameter: "5.5",  soilWeight: "0.25" },
      { tamizDiameter: "4.4",  soilWeight: "20.11" },
      { tamizDiameter: "1.1",  soilWeight: "31.50" },
      { tamizDiameter: "0.25",  soilWeight: "10.05" },
      { tamizDiameter: "0.10",  soilWeight: "35.10" },
      { tamizDiameter: "0.05",  soilWeight: "15.22" },
    ]
    
    const result:string = "0.99013632889";

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



  it('My example 3', () => {
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
    const result:string = "0.278211550052";

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



  
  it('Real Example 4', () => {
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
    const result:string = "0.305497287786";

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




  it('Real Example 5', () => {
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
    const result:string = "1.924866803276";

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

})
*/