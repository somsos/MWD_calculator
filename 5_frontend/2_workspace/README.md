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
- [ ] Make transparent the icon, for future change of background color
- [ ] Transform comma in point
- [ ] Create build to change the manifest (in index.html) and worker (main.XXX.js) to the child path
- [ ] Create installable as PWA
- [ ] Add button of add excel
- [ ] Add button of download excel

<!-- 
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
