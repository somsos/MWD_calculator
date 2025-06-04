# What Did I learned

Evitar que se ejecute el evento click del padre al hacer click en un hijo.

## Avoiding event propagation in nested clickeable elements

Here we can see how the father and the child execute a method on a click,
and I had the problem of, I coudn't execute just the child method without
the father method run as well, so using `$event.stopPropagation()` we can
avoid this problem.

```html
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
```
