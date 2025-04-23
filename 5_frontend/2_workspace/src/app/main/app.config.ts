import { ApplicationConfig, provideExperimentalZonelessChangeDetection, importProvidersFrom } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CalcMwdModule } from '../core/CalcMwdModule';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    importProvidersFrom(CalcMwdModule),
    provideAnimationsAsync('noop')
  ]
};
