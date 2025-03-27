import { Component, OnInit, signal } from '@angular/core';
import { MwdSamplesComponent } from '../mwd-samples/mwd-samples.component';
import { IResultsDto, MapSamples } from '../../0shared';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MwdResultsComponent } from '../mwd-results/mwd-results.component';
import { IInputDriver } from '../../core';
import { InputDriverImpl } from '../../core/internals/inputDriver/impl/InputDriverImpl';

@Component({
    selector: 'main-layout-root',
    templateUrl: './main-layout.component.html',
    styleUrl: './main-layout.component.scss',
    standalone: true,
    imports: [
      MwdSamplesComponent,
      MwdResultsComponent,
      CommonModule
    ]
})
export class MainLayoutComponent {
  results?: IResultsDto;

  onSubmitSample(newSample: MapSamples) {
    const inputDriver:IInputDriver = new InputDriverImpl();
    this.results = inputDriver.resolveSamples(newSample);
  }

}
