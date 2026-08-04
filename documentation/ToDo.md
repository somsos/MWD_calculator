# ToDo

## Now

- [X] Extract the excel example to test
- [X] Fix Calculation
- [ ] {"Look for/Genere"} a new example.
- [ ] Understand how works that of adding a row
  - This value is the first one (0.165983606557) in the row and it should be the second onw that is 0.0614754098361)
- [ ] Check why some unit tests are failing
- [ ] Fix the appImage bundle "npm run tauri-build-lin-appImage"
- [ ] En la ultima fila de la primer columna, siempre va cero
  - ![alt](../documentation/inputs/secondRequests/CeroPorDefault.png)
- [ ] Check if I can use the excel to test my own set of data




## Out look

- [X] Decide which technologies to use
- [X] Create backlog (user histories)
- [X] Use git and create upload a backup
- [X] Create a flow
- [ ] Design Core (ER Diagram)
- [ ] Design UX (List of features and ranged by importance)
- [ ] Design UI (Wireframe)
- [ ] Design BD (E/R Diagram)
- [ ] Develop Core (Logic)
- [ ] Develop Input adapter (User interface)
- [ ] Develop Output adapter (Database)
- [ ] Stick together the three layers.

## Inner look

- [X] Add button of clean
- [X] Add button of download csv
- [X] Add button of add csv
- [X] Add history
- [X] Check type of keyboard it shows in android
- [X] Check inputs like 0.105 can get in without problems (when gets 0.10 transform it to 0.1)
- [X] Check input by keyboard in Firefox, and ensure that they get in like numbers and not like text
- [X] Create an executable
- [X] Set autofocus at first input
- [X] Transform comma in point
- [X] test that the input number by text input is fire proof. with cypress
  - [X] Create a description of.
    - [X] How any that is not a number is rejected
    - [X] How a comma is transformed to a point
    - [X] ".N" or ",0" is transformed to "0.N"
    - [X] ".N.N" transformed to "N.N"
    - [X] "N..N" transformed to "N.N"
    - [X] "N.0N" it does not give problems.
- [X] Windows Bugs
  - [X] The insert csv button select a file but it doesn't read it
- [X] Make the icon image with background transparency, for future change of background color in the page
- [X] Executables
  - [X] Check icons in the executables
  - [X] Check icons in the installable
  - [X] Build android Apk
  - [X] Check if in notes speak about where is executable and installable path
  - [X] Integrate this project with the repository of Calc
- [ ] Create installable as PWA
- [ ] Add button of add excel
- [ ] Add button of download excel
