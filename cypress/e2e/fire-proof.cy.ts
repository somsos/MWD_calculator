import "cypress-real-events";

describe('Fire proof', () => {

  it('Input filtering and conversion', () => {

    const testCases: CleanStNumberTestCase[] = [

      //No numerical cases
      { input: "qwertyuiopasdfghjklzxcvbnm", expected: "" },
      { input: "!\"·$%&/()=\\?¿'¡`+ḉ-^*¨Ç;:_[]{}─", expected: "" }, //all symbols except coma and point, because they have an auto-complete


      //no move cases
        { input: "1", expected: "1" },
        { input: "2.2", expected: "2.2" },
        { input: "333.333", expected: "333.333" },
        { input: "44.44", expected: "44.44" },
        { input: "0", expected: "0" },
        { input: "0.0", expected: "0.0" },
        { input: "0.00", expected: "0.00" },

        { input: "00.00", expected: "00.00" },

      //dot cases
        //add zero cases
        { input: ".0", expected: "0.0" },
        { input: ".11", expected: "0.11" },
        { input: ".444444", expected: "0.444444" },

        //dot at the start
        { input: ".7.7", expected: "7.07" },
        { input: "..8.8", expected: "8.8" },
        { input: "....9.1", expected: "9.1" },
        { input: ",0", expected: "0.0" },

        //dot in the middle
        { input: "5....5", expected: "5.0005" },
        { input: "6.6.", expected: "6.6" },

        //dot at the end
        { input: "11.11..", expected: "11.11" },
        { input: "12.12......", expected: "12.12" },

      //comma cases
        { input: ",7,7", expected: "7.07" },
        { input: ",,8,8", expected: "8.8" },
        { input: ",,,9,1", expected: "9.01" },

        //dot in the middle
        { input: "5....5", expected: "5.0005" },
        { input: "6.6.", expected: "6.6" },
        { input: "9..9", expected: "9.09" },

        //dot at the end
        { input: "11.11..", expected: "11.11" },
        { input: "12.12......", expected: "12.12" },

      //comma cases
        { input: "1,", expected: "1.0" },
        { input: "0,", expected: "0.0" },
        { input: "1376,", expected: "1376.0" },

        //comma in the middle
        { input: "5,,,,5", expected: "5.0005" },
        { input: "6,6,", expected: "6.6" },
        { input: "9,,9", expected: "9.09" },

        //comma at the end
        { input: "11,11,,", expected: "11.11" },
        { input: "12,12,,,,,,", expected: "12.12" },

      ];

    cy.visit('http://localhost:4200/').wait(500);

    // First is different because we expected that the focus is automatically set on the first input
    const firstCase: CleanStNumberTestCase = {
      input: testCases[0].input,
      expected: testCases[0].expected,
    };
    testCases.shift();

    cy.get("body").type(firstCase.input);
    cy.focused().then(($el) => {
      const inputValue = ($el[0] as HTMLInputElement).value;
      if(inputValue !== firstCase.expected) {
        throw new Error(`input "${firstCase.input}", then Got "${inputValue}" but expected "${firstCase.expected}"`);
      }
    });


    // iteration

    for (let i = 0; i < testCases.length; i++) {
      const inputCase = testCases[i];
      insertNextInputCase(inputCase);
    }

  })

})


interface CleanStNumberTestCase {
  input: string,
  expected: string,
}

function insertNextInputCase(testCase: CleanStNumberTestCase) {
  cy.press(Cypress.Keyboard.Keys.TAB);
  cy.get("body").type(testCase.input);

  cy.focused().then(($el) => {
    cy.realPress(["Shift", "Tab"]);
    //cy.wait(1250);
    cy.press(Cypress.Keyboard.Keys.TAB);
    //cy.wait(1250);
    cy.focused().then(($el) => {
      const got = ($el[0] as HTMLInputElement).value;
      if(got !== testCase.expected) {
        throw new Error(`input "${testCase.input}", then Got "${got}" but expected "${testCase.expected}"`);
      }
    });

  })
}
