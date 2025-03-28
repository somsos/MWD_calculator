import { Component, Inject } from '@angular/core';
import { MwdSamplesComponent } from '../mwd-samples/mwd-samples.component';
import { IResultsDto, MapSamples } from '../../0shared';
import { CommonModule } from '@angular/common';
import { MwdResultsComponent } from '../mwd-results/mwd-results.component';
import { CalcMwdModule, CoreNames, IInputDriver, IOutputDriver } from '../../core';
import { InputDriverImpl } from '../../core/internals/inputDriver/impl/InputDriverImpl';

@Component({
    selector: 'main-layout-root',
    templateUrl: './main-layout.component.html',
    styleUrl: './main-layout.component.scss',
    standalone: true,
    imports: [
      CalcMwdModule,
      MwdSamplesComponent,
      MwdResultsComponent,
      CommonModule
    ]
})
export class MainLayoutComponent {
  results?: IResultsDto;
  samples?: MapSamples;

  constructor(
    @Inject(CoreNames.IOutputDriver) private _ourDrv: IOutputDriver,
  ) {}

  onSubmitSample(newSample: MapSamples) {
    const inputDriver:IInputDriver = new InputDriverImpl();
    this.samples = newSample;
    this.results = inputDriver.resolveSamples(this.samples);
  }

  downloadCsv(): void {
    if(!this.results || !this.samples) {
      throw new Error("Aun no se puede generar csv");
    }
    this._ourDrv.resultsToCsv(this.results, this.samples);
  }

}
