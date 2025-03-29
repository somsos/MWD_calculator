import { Injectable, signal } from '@angular/core'
import { IInputDriver, IOutputDriver } from '../../0shared';

@Injectable({
  providedIn: 'root',
})
export class LazyLoaderService {
  public coreLoaded = signal(false);

  private static CalcMwdModule: any;

  async startCoreModuleLoading(): Promise<void> {
    LazyLoaderService.CalcMwdModule = await import('../../core/CalcMwdModule').then((m) => m.CalcMwdModule)
  }

  public getCoreOutputDriver(): IOutputDriver {
    const a = new LazyLoaderService.CalcMwdModule();
    return a.getOutputDriver();
  }

  getCoreInputDriver(): IInputDriver {
    const a = new LazyLoaderService.CalcMwdModule();
    return a.getInputDriver();
  }

}
