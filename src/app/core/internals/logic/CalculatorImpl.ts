import { IResultsDto, MapSamples, ResultsDtoUtils } from "../../../0shared";
import { NumberUtils } from "../../../0shared/internals/utils/NumberUtils";
import { ICalculator } from "./ICalculator";

export class CalculatorImpl implements ICalculator {

  private _samplesRows!: MapSamples;

  private readonly _results: IResultsDto = ResultsDtoUtils.getEmptyResults();

  private readonly _printProcess: boolean = true;

  setData(samplesRows: MapSamples): void {
    this._samplesRows = samplesRows;
    this._adjustPrecisionSample();
    if(ResultsDtoUtils.itHasProcessedData(this._results)) {
      ResultsDtoUtils.cleanResults(this._results);
    }
  }

  // first calc
  calcTotalSoilWeight(): number {
    // check it was already calculated, and if so, return it
    if(this._results.totalSoilWeight != -1) {
      return this._results.totalSoilWeight;
    }

    let resp = 0;
    const soilWeights = this._getSoilWeights();
    soilWeights.forEach((weight) => {
      resp = resp + weight;
    });
    resp = NumberUtils.adjustPrecision(resp);
    this._results.totalSoilWeight = resp;
    return this._results.totalSoilWeight;
  }

  calcTamizDiameterProm(): Array<number> {
    // check it was already calculated, and if so, return it
    if(this._results.tamizDiameterProm.length !== 0) {
      return this._results.tamizDiameterProm;
    }

    const resp: Array<number> = [];
    const tDiameters = this._getTamizDiameters();
    for (let i = 0; i < tDiameters.length-1; i++) {
      const currentDiam= tDiameters[i];
      const nextDiameter = tDiameters[i+1];
      const sum = currentDiam + nextDiameter;
      const rawDiv = sum / 2;
      const prom = NumberUtils.adjustPrecision(rawDiv);
      resp.push(prom);
    }
    this._results.tamizDiameterProm = resp;
    return this._results.tamizDiameterProm;
  }

  calcSoilPortions(): Array<number> {
    // check it was already calculated, and if so, return it
    if(this._results.soilPortions.length !== 0) {
      return this._results.soilPortions;
    }

    const soilWeights = this._getSoilWeights();
    //soilWeights.shift(); // remove first row.
    const totalSoilWeight: number = this.calcTotalSoilWeight();
    const soilPortions = soilWeights.map(sp => {
      const divRaw = sp / totalSoilWeight;
      const divFixed =  NumberUtils.adjustPrecision(divRaw);
      return divFixed;
    });

    this._results.soilPortions = soilPortions;
    return this._results.soilPortions;
  }




  calcMWDs(): Array<number> {
    // check it was already calculated, and if so, return it
    if(this._results.MWDs.length !== 0) {
      return this._results.MWDs;
    }

    const soilWeights: Array<number> = this.calcTamizDiameterProm();
    const soilPortions: Array<number> = this.calcSoilPortions();
    soilWeights.push(0);
    if (this._printProcess) {
      console.log("soilWeights", soilWeights);
      console.log("soilPortions", soilPortions);
    }

    if(soilWeights.length != soilPortions.length) {
      throw new Error("unexpected: soilWeights.length != soilPortions.length");
    }

    if (this._printProcess) {
      console.log(`soilWeight * soilPortion = Resp`);
    }
    const resp: number[] = [];
    for (let i = 0; i < soilWeights.length; i++) {
      const soilWeight = soilWeights[i];
      const soilPortion = soilPortions[i];
      const multiRaw = soilWeight * soilPortion;
      if (this._printProcess) {
        console.log(`${soilWeight} * ${soilPortion} = ${multiRaw}`);
      }
      const multiFixed = NumberUtils.adjustPrecision(multiRaw);
      resp.push(multiFixed);
    }

    this._results.MWDs = resp;
    if (this._printProcess) {
      console.log("MWDs", resp);
    }
    return this._results.MWDs;
  }

  calcMWDTotal(): number {
    if(this._results.MWDTotal != -1) {
      return this._results.MWDTotal;
    }

    const MWDs = this.calcMWDs();
    let resp = 0;
    for (let i = 0; i < MWDs.length; i++) {
      resp = resp + MWDs[i];
    }
    resp = NumberUtils.adjustPrecision(resp);

    this._results.MWDTotal = resp;
    return this._results.MWDTotal;
  }





  // PRIVATE METHODS
  private _getTamizDiameters(): number[] {
    const all = Array.from(this._samplesRows.values()).map(v => v.tamizDiameter);
    return all;
  }

  private _getSoilWeights(): Array<number> {
    const all = Array.from(this._samplesRows.values()).map(v => v.soilWeight);
    return  all;
  }

  private _adjustPrecisionSample(): void {
    this._samplesRows.values()
  }

  public getResults(): IResultsDto {
    let clone = ResultsDtoUtils.getEmptyResults();
    Object.assign(clone, this._results);
    return clone;
  }

}


