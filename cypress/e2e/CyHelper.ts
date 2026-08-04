export function inputAllSamples(samples: ISample[]) {
  for (let i = 0; i < samples.length; i++) {
    inputNextCell(samples[i].tamizDiameter);
    inputNextCell(samples[i].soilWeight);
  }
}

export interface ISample {
  tamizDiameter: string,
  soilWeight: string,
}




// PRIVATE


function inputNextCell(sample: string) {
  cy.press(Cypress.Keyboard.Keys.TAB);
  cy.get("body").type(sample);
}

