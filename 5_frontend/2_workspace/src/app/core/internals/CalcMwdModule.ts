import { NgModule } from '@angular/core';
import { OutputDriverImpl } from './outputDriver/impl/OutputDriverImpl';

/*
I Don't know why but it gives undefined if i put it in index.ts
*/
export abstract class CoreNames {
  public static readonly IOutputDriver = "IOutputDriver"
}

@NgModule({
  imports: [

  ],
  exports: [],
  providers: [
    {
      provide: CoreNames.IOutputDriver,
      useClass: OutputDriverImpl
    },
  ],
})
export class CalcMwdModule { }
