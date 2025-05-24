# MwdCalculator

## Developer notes

### Steps to deploy

1, Build using command `npm run build-demo`

- Note: This scripts is configured to add a path `/calc_mwd/` which is were live my demos

2, Remplace the content in the repository `00_my_demos/calc_mwd` by the new one.

- Note: check that index is a calc_mwd/index.html

3, In the repository `/00_my_demos/calc_mwd` commit and push

4, Go to netlify > look for my_demos repository > press deploy button

## ToDo

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
- [ ] Windows Bugs
  - [ ] The insert csv button select a file but it doesn't read it
- [X] Make the icon image with background transparency, for future change of background color in the page
- [ ] Create installable as PWA
- [ ] Executables
  - [ ] Check icons in the executables
  - [ ] Check icons in the installable
  - [ ] Build android Apk
  - [ ] Check if in notes speak about where is executable and installable path
  - [ ] Integrate this project with the repository of Calc
- [ ] Add button of add excel
- [ ] Add button of download excel

<!-- 
npm run desktop-make -- --arch="x64" --platform="win32

Agregar a que aprendí hoy: Evitar que se ejecute el evento click del padre al hacer click en un hijo.

<div *ngFor='let item of history; index as i' class='history-row-container'>
  <div class="history-row history-item" (click)="onRecordClick(i)">
    <div>{{ item.createdAt | date: 'short' }}</div>
    <div>{{ (i === 0) ? "Ejemplo" : i }}</div>
    <div>{{ item.result }}</div>
    <button *ngIf="i !== 0" (click)="onClickCleanOne(i); $event.stopPropagation()">
      <mat-icon>delete</mat-icon>
    </button>
  </div>
</div>
-->




## Tauri + Angular

This template should help get you started developing with Tauri and Angular.

### Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer) + [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template).

