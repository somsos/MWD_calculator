import { NgModule } from '@angular/core';
import { OutputDriverImpl } from './outputDriver/impl/OutputDriverImpl';
import { InputDriverImpl } from './inputDriver/impl/InputDriverImpl';

/*
I Don't know why but it gives undefined if i put it in index.ts
*/
export enum CoreNames {
  IOutputDriver = "IOutputDriver",
  IInputDriver = "IOutputDriver",
}

@NgModule({
  imports: [

  ],
  exports: [],
  providers: [
    { provide: CoreNames.IOutputDriver, useClass: OutputDriverImpl },
    { provide: CoreNames.IInputDriver, useClass: InputDriverImpl },
  ],
})
export class CalcMwdModule { }
