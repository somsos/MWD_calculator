import { AfterViewInit, Component, computed, EventEmitter, inject, Input, Output, signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { IRowSample, MapSamples } from "../../0shared";
import { MaterialModule } from '../material.module';
import { LazyLoaderService } from '../0commons/LazyLoaderService';
import { MwdHistoryComponent } from '../mwd-history/mwd-history.component';

@Component({
    selector: 'app-mwd-samples',
    standalone: true,
    imports: [
      MaterialModule,
      MwdHistoryComponent,
    ],
    templateUrl: './mwd-samples.component.html',
    styleUrls: ['./mwd-samples.component.scss']
})
export class MwdSamplesComponent implements AfterViewInit {
  private readonly formBuilder = inject(FormBuilder);
  private readonly _loader = inject(LazyLoaderService);

  @Input()
  coreLoaded!: WritableSignal<boolean>;

  @Output()
  public readonly sampleSubmitted = new EventEmitter<MapSamples>();

  @Output()
  public readonly resetClick = new EventEmitter<void>();

  // Define the form group that holds the form array
  form = this.formBuilder.group({
    rows: this.formBuilder.array<FormGroup>([]),
  });

  public rows = computed(() => this.form.get('rows') as FormArray);

  readonly displayedColumns = ['tamizDiameter', 'soilWeight'];

  public readonly showHistory$ = signal(false);

  ngAfterViewInit(): void {
    this.addRow();
    this.addRow();
  }

  // Update row based on index and key
  updateRow(index: number, key: keyof IRowSample, event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const valueStr = inputElement.value;

    if(valueStr.endsWith(".") || valueStr.endsWith("0")) {
      return ;
    }

    if(valueStr.endsWith(",")) {
      valueStr.replace(",", ".");
      return ;
    }

    const valueNum = Number(valueStr);
    if(valueNum === 0) {
      //When we have values as 0.0 or 0.00, we will get 0 but that will set the input as 0 making it annoying for the user.
      return ;
    }

    if (isNaN(valueNum)) {
      setTimeout(() => (inputElement.value = ''), 100);
      return;
    }

    const row = this.rows().at(index);
    row.patchValue({ [key]: valueNum });

    // Check if the penultimate row is valid before adding a new row
    const penultimateRowValid = this.rows().length > 1 && this.rows().at(this.rows().length - 2).valid;
    const userIsEditingLastRow = index === this.rows().length - 1;
    if (penultimateRowValid && userIsEditingLastRow) {
      this.addRow();
    }
  }

  // Add a new row if the penultimate row is valid
  addRow(): void {
    this.rows().push(this._createRowFormGroup());
  }

  removeRow() {
    this.rows().removeAt(this.rows().length-1);
  }

  private _removeRows() {
    this.rows().clear();
  }

  onClickSubmit(): void {
    const sampleOnForm = this._castUIToSample();
    this.sampleSubmitted.emit(sampleOnForm);
  }

  // Convert UI data into a MapSamples object
  private _castUIToSample(): MapSamples {
    const result: MapSamples = new Map();
    this.rows().controls.forEach((row, index) => {
      if (row.valid) {
        result.set(index, row.value);
      }
    });
    return result;
  }

  private static readonly numberValidators = [
    Validators.required,
    Validators.min(0),
    Validators.max(100),
    Validators.pattern(/^\d{1,8}(\.\d{1,8})?$/),
  ];

  private _createRowFormGroup(): FormGroup {
    return this.formBuilder.group({
      tamizDiameter: ['', [...MwdSamplesComponent.numberValidators]],
      soilWeight: ['', MwdSamplesComponent.numberValidators],
    });
  }

  public insertSample(sample: MapSamples): void {
    this.onClickReset(false);
    sample.forEach(rd => {
      const newRow = this.formBuilder.group({
        tamizDiameter: [rd.tamizDiameter, [...MwdSamplesComponent.numberValidators]],
        soilWeight: [rd.soilWeight, MwdSamplesComponent.numberValidators],
      });
      this.rows().push(newRow);
    })
    this.onClickSubmit();
  }

  onClickReset(addRows = true): void {
    this._removeRows();
    if(addRows) {
      this.addRow();
      this.addRow();
    }
    this.resetClick.emit();
  }

  async onSelectFile(ev: any) {
    const csvFile = ev.target.files[0];
    const inDrv = this._loader.getCoreInputDriver();
    const sampleInCsv = await inDrv.parseFileToSamples(csvFile);
    this.insertSample(sampleInCsv);
  }

}
