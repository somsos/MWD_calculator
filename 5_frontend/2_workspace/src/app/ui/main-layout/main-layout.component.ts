import { AfterContentInit, Component, inject, signal, WritableSignal } from '@angular/core';
import { MwdSamplesComponent } from '../mwd-samples/mwd-samples.component';
import { IInputDriver, IOutputDriver, IResultsDto, MapSamples } from '../../0shared';
import { MwdResultsComponent } from '../mwd-results/mwd-results.component';
//import { CalcMwdModule, CoreNames, IInputDriver, IOutputDriver } from '../../core';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from '../material.module';
import { ComponentType } from '@angular/cdk/overlay';
import { LazyLoaderService } from '../0commons/LazyLoaderService';

@Component({
    selector: 'main-layout-root',
    templateUrl: './main-layout.component.html',
    styleUrl: './main-layout.component.scss',
    standalone: true,
    imports: [
      MaterialModule,
      //CalcMwdModule,
      MwdSamplesComponent,
      MwdResultsComponent,
    ]
})
export class MainLayoutComponent implements AfterContentInit {
  results: WritableSignal<IResultsDto | null> = signal(null);
  samples?: MapSamples;
  readonly dialog = inject(MatDialog);
  public readonly loader = inject(LazyLoaderService);
  private _ourDrv!: IOutputDriver;
  private _inDrv!: IInputDriver;


  ngAfterContentInit(): void {
    this.loader.startCoreModuleLoading().then(() => {
      this.loader.coreLoaded.set(true);
      this._ourDrv = this.loader.getCoreOutputDriver();
      this._inDrv =  this.loader.getCoreInputDriver();
    });
  }

  onSubmitSample(newSample: MapSamples) {
    this.samples = newSample;
    const results = this._inDrv.resolveSamples(newSample);
    this.results.set(results);
  }

  downloadCsv(): void {
    const results = this.results();
    if(!results || !this.samples) {
      throw new Error("Aun no se puede generar csv");
    }
    this._ourDrv.resultsToCsv(results, this.samples);
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

  onResetClick(): void {
    this.samples = undefined;
    this.results.set(null);
  }

}

