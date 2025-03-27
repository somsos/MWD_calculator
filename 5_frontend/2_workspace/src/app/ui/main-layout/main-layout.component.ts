import { Component, OnInit, signal } from '@angular/core';
import { SamplesTableComponent } from '../samples-table/samples-table.component';
import { IResultsDto, MapSamples } from '../../0shared';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MwdCalcComponent } from '../mwd-calc/mwd-calc.component';
import { IInputDriver } from '../../core';
import { InputDriverImpl } from '../../core/internals/inputDriver/impl/InputDriverImpl';

@Component({
    selector: 'main-layout-root',
    templateUrl: './main-layout.component.html',
    styleUrl: './main-layout.component.scss',
    standalone: true,
    imports: [
      SamplesTableComponent,
      MwdCalcComponent,
      CommonModule
    ]
})
export class MainLayoutComponent {
  title = 'mwd_calculator';
  results?: IResultsDto;

  onSubmitSample(newSample: MapSamples) {
    const inputDriver:IInputDriver = new InputDriverImpl();
    this.results = inputDriver.resolveSamples(newSample);
  }

}
