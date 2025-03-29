import { Component, inject, Inject } from '@angular/core';
import { MwdSamplesComponent } from '../mwd-samples/mwd-samples.component';
import { IResultsDto, MapSamples } from '../../0shared';
import { MwdResultsComponent } from '../mwd-results/mwd-results.component';
import { CalcMwdModule, CoreNames, IInputDriver, IOutputDriver } from '../../core';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from '../material.module';
import { ComponentType } from '@angular/cdk/overlay';

@Component({
    selector: 'main-layout-root',
    templateUrl: './main-layout.component.html',
    styleUrl: './main-layout.component.scss',
    standalone: true,
    imports: [
      MaterialModule,
      CalcMwdModule,
      MwdSamplesComponent,
      MwdResultsComponent,
    ]
})
export class MainLayoutComponent {
  results?: IResultsDto ;
  samples?: MapSamples;
  readonly dialog = inject(MatDialog);

  constructor(
    @Inject(CoreNames.IOutputDriver) private _ourDrv: IOutputDriver,
    @Inject(CoreNames.IInputDriver) private _inDrv: IInputDriver,

  ) {}

  onSubmitSample(newSample: MapSamples) {
    this.samples = newSample;
    this.results = this._inDrv.resolveSamples(newSample);
  }

  downloadCsv(): void {
    if(!this.results || !this.samples) {
      throw new Error("Aun no se puede generar csv");
    }
    this._ourDrv.resultsToCsv(this.results, this.samples);
  }

  async openDialog() {
    const chunk = await import(
      `../csv-example-dialog/csv-example-dialog.component`
    );
    const DialogComponent = Object.values(chunk)[0] as ComponentType<unknown>;

    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
