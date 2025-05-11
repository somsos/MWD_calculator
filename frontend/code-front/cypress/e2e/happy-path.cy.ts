describe('General working', () => {

  it('Happy path', () => {
    const happyPathSample: ISample[] = [
      { tamizDiameter: "8.0",    soilWeight: "0.0"    },
      { tamizDiameter: "4.0",    soilWeight: "3.4"    },
      { tamizDiameter: "2.0",    soilWeight: "21.26"  },
      { tamizDiameter: "1.0",    soilWeight: "34.73"  },
      { tamizDiameter: "0.5",    soilWeight: "35.69"  },
      { tamizDiameter: "0.25",   soilWeight: "31.31"  },
      { tamizDiameter: "0.053",  soilWeight: "38.26"  },
      { tamizDiameter: "0.0",    soilWeight: "25.37"  },
    ]

    cy.visit('http://localhost:4200/').wait(500);

    // need to check if automatically focus the first input.
    cy.get("body").type(happyPathSample[0].tamizDiameter);
    cy.press(Cypress.Keyboard.Keys.TAB);
    cy.get("body").type(happyPathSample[0].soilWeight);
    happyPathSample.shift();

    //rest of samples

    inputAllSamples(happyPathSample);

    cy.get("#btn-calculate").click();

    cy.get("#text-result").contains("0.953859829");

  })

})

function inputNextCell(sample: string) {
  cy.press(Cypress.Keyboard.Keys.TAB);
  cy.get("body").type(sample);
}

function inputAllSamples(samples: ISample[]) {
  for (let i = 0; i < samples.length; i++) {
    inputNextCell(samples[i].tamizDiameter);
    inputNextCell(samples[i].soilWeight);
  }
}

interface ISample {
  tamizDiameter: string,
  soilWeight: string,
}

