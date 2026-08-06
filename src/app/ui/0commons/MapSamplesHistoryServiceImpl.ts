import { Injectable } from "@angular/core";
import { MapSamples } from "../../0shared";
import { BehaviorSubject, Observable } from "rxjs";
import { mineCase1 } from "../../0shared/tests/mineCase1";
import { excelCase1 } from "../../0shared/tests/excelCase1";
import { excelCase2 } from "../../0shared/tests/excelCase2";
import { excelCase3 } from "../../0shared/tests/excelCase3";
import { excelCase4 } from "../../0shared/tests/excelCase4";
import { excelCase5 } from "../../0shared/tests/excelCase5";
import { excelCase6 } from "../../0shared/tests/excelCase6";

export interface IMapSamplesHistoryService {

  addSamplesRecord(newRecord: ISampleRecord): void

  getSamplesByItem(index: number): MapSamples;

}

export interface ISampleRecord {
  sample: MapSamples;
  result: number;
  createdAt?: Date;
}

@Injectable({ providedIn: "root" })
export class MapSamplesHistoryServiceImpl implements IMapSamplesHistoryService {

  private readonly _allSamples$ = new BehaviorSubject<ISampleRecord[]>([...this.getExamples()]);


  addSamplesRecord(newRecord: ISampleRecord): void {
    if(newRecord.createdAt === undefined) {
      newRecord.createdAt = new Date();
    }

    if(this._doesSampleExist(newRecord)) {
      return ;
    }

    this._allSamples$.next([...this._allSamples$.value, newRecord]);
  }

  _doesSampleExist(newRecord: ISampleRecord): boolean {
    const newResult = newRecord.result;
    if(newResult === 0 || newResult === undefined) {
      return true;
    }

    const existRepeated = this._allSamples$.value.some((record) => {
      const resultInHistory = record.result;

      return resultInHistory === newResult;
    });
    return existRepeated;
  }


  getSamplesByItem(index: number): MapSamples {
    return this._allSamples$.value[index].sample;
  }

  observeAllSamplesRecords():  Observable<ISampleRecord[]> {
    return this._allSamples$.asObservable();
  }


  cleanAll(): void {
    this._allSamples$.next([...this.getExamples()]);
  }

  cleanOne(index: number): void {
    const currentSamples = this._allSamples$.value;
    if(index < 0 || index >= currentSamples.length) {
      throw new Error("Index out of bounds");
    }
    currentSamples.splice(index, 1);
    this._allSamples$.next(currentSamples);
  }

  getExamples(): ISampleRecord[] {
    return [
      {
        sample: mineCase1.inputSamples,
        result: Number(mineCase1.MWDTotalExpected.toFixed(4)),
        createdAt: new Date("2026-08-05T21:01:21-06:00"),
      }, {
        sample: excelCase1.inputSamples,
        result: Number(excelCase1.MWDTotalExpected.toFixed(4)),
        createdAt: new Date("2025-04-07T18:50:00-06:00"),
      },  {
        sample: excelCase2.inputSamples,
        result: Number(excelCase2.MWDTotalExpected.toFixed(4)),
        createdAt: new Date("2026-08-05T21:01:21-06:00"),
      },  {
        sample: excelCase3.inputSamples,
        result: Number(excelCase3.MWDTotalExpected.toFixed(4)),
        createdAt: new Date("2026-08-05T21:01:21-06:00"),
      },  {
        sample: excelCase4.inputSamples,
        result: Number(excelCase4.MWDTotalExpected.toFixed(4)),
        createdAt: new Date("2026-08-05T21:01:21-06:00"),
      },  {
        sample: excelCase5.inputSamples,
        result: Number(excelCase5.MWDTotalExpected.toFixed(4)),
        createdAt: new Date("2026-08-05T21:01:21-06:00"),
      },  {
        sample: excelCase6.inputSamples,
        result: Number(excelCase6.MWDTotalExpected.toFixed(4)),
        createdAt: new Date("2026-08-05T21:01:21-06:00"),
      }
    ]
  }

}
