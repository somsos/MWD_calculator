import { Injectable } from '@angular/core'
import { Observable, of, delay, tap } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class LazyLoaderService {
  private lazyMap: Map<string, Promise<unknown>> = new Map()

  constructor() {}

  async getLazyModule(key: string): Promise<unknown> {
    return this.lazyMap.get(key)
  }

  loadLazyModules(): Observable<number | void> {
    return of(1).pipe(
      delay(2000),
      tap(() => {
        this.lazyMap.set(
          'lazy',
          import('../../core/internals/CalcMwdModule').then((m) => m.CalcMwdModule)
        )
      })
    )
  }
}
