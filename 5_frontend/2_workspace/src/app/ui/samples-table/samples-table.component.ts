import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { PreventWheelDirective } from '../common/PreventWheelDirective';

interface IRowSample {
  soilWeight: number;
  tamizDiameter: number;
}

export type MapSamples = Map<number, IRowSample>;

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
  styleUrls: ['./samples-table.component.scss'],
})
export class SamplesTableComponent {
  private formBuilder = inject(FormBuilder);

  // Define the form group that holds the form array
  form: FormGroup = this.formBuilder.group({
    rows: this.formBuilder.array([this.createRowFormGroup()]), // Initial row
  });

  displayedColumns = ['soilWeight', 'tamizDiameter'];

  // Method to create a new row FormGroup
  createRowFormGroup(): FormGroup {
    return this.formBuilder.group({
      soilWeight: [
        0.001,
        [Validators.required, Validators.min(0), Validators.max(100)],
      ],
      tamizDiameter: [
        0.001,
        [Validators.required, Validators.min(0), Validators.max(9.99)],
      ],
    });
  }

  // Access the form array to handle rows dynamically
  get rows(): FormArray {
    return this.form.get('rows') as FormArray;
  }

  // Update row based on index and key
  updateRow(index: number, key: keyof IRowSample, event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    const row = this.rows.at(index);
    row.patchValue({ [key]: value });
  }

  // Add a new row if the penultimate row is valid
  addRow(): void {
    const penultimateRow = this.rows.at(this.rows.length - 2);

    if (
      penultimateRow?.valid &&
      penultimateRow?.value.soilWeight > 0 &&
      penultimateRow?.value.tamizDiameter > 0
    ) {
      this.rows.push(this.createRowFormGroup());
    }
  }

  // Calculate the map of valid samples
  calculate(): void {
    const result: MapSamples = new Map();
    this.rows.controls.forEach((row, index) => {
      if (row.valid) {
        result.set(index, row.value);
      }
    });
    console.log(result);
  }
}
