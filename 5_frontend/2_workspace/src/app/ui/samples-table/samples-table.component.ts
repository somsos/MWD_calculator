import { Component, computed, EventEmitter, inject, OnInit, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { PreventWheelDirective } from '../common/PreventWheelDirective';

import { IRowSample, MapSamples } from "../../0shared";

@Component({
    selector: 'app-samples-table',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        PreventWheelDirective,
    ],
    templateUrl: './samples-table.component.html',
    styleUrls: ['./samples-table.component.scss']
})
export class SamplesTableComponent implements OnInit {
  private formBuilder = inject(FormBuilder);

  @Output()
  public readonly sampleSubmitted = new EventEmitter<MapSamples>();

  private insertSample() {
    this.rows().push
  }

  // Define the form group that holds the form array
  form = this.formBuilder.group({
    rows: this.formBuilder.array<FormGroup>([]),
  });

  public rows = computed(() => this.form.get('rows') as FormArray);

  displayedColumns = ['tamizDiameter', 'soilWeight'];

  ngOnInit(): void {
    const samplesRows1: MapSamples = new Map([
      [0, {soilWeight: 1, tamizDiameter: 10}],
      [1, {soilWeight: 2, tamizDiameter: 11}],
      [2, {soilWeight: 3, tamizDiameter: 12}],
      [3, {soilWeight: 4, tamizDiameter: 13}],
      [4, {soilWeight: 5, tamizDiameter: 14}],
      [5, {soilWeight: 6, tamizDiameter: 15}],
      [6, {soilWeight: 7, tamizDiameter: 16}],
      [7, {soilWeight: 8, tamizDiameter: 17}],
    ]);

    this._insertSample(samplesRows1);
    this.addRow(); // Ensure at least one row on init
  }

  // Update row based on index and key
  updateRow(index: number, key: keyof IRowSample, event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const valueStr = inputElement.value;

    if(valueStr.endsWith(".")) {
      return ;
    }

    const valueNum = Number(valueStr);

    if (isNaN(valueNum)) {
      setTimeout(() => (inputElement.value = ''), 100);
      return;
    }

    const row = this.rows().at(index);
    row.patchValue({ [key]: valueNum });

    // Check if the penultimate row is valid before adding a new row
    const penultimateRowValid = this.rows().length > 1 && this.rows().at(this.rows().length - 2).valid;
    if (penultimateRowValid) {
      this.addRow();
    }
  }

  // Add a new row if the penultimate row is valid
  addRow(): void {
    this.rows().push(this._createRowFormGroup());
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
      tamizDiameter: ['', [...SamplesTableComponent.numberValidators]],
      soilWeight: ['', SamplesTableComponent.numberValidators],
    });
  }

  private _insertSample(sample: MapSamples): void {
    sample.forEach(rd => {
      const newRow = this.formBuilder.group({
        tamizDiameter: [rd.tamizDiameter, [...SamplesTableComponent.numberValidators]],
        soilWeight: [rd.soilWeight, SamplesTableComponent.numberValidators],
      });
      this.rows().push(newRow);
    })


  }
}
