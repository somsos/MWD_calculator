import { MapSamples } from "../../../0shared";
import { ICalculator } from "./ICalculator";

export class CalculatorImpl implements ICalculator {

  private _samplesRows: MapSamples;

  private static readonly precision = 9;

  setData(samplesRows: MapSamples): void {
    this._samplesRows = samplesRows;
    this._adustPrecisionSample();
  }
  
  calcTotalSoilWeight(): number {
    let resp = 0;
    const soilWeights = this._getSoilWeights();
    soilWeights.forEach((weight) => {
      resp = resp + weight;
    });
    return resp;
  }

  calcTamizDiameterProm(): Array<number> {
    const resp: Array<number> = [];
    const tDiameters = this._getTamizDiameters();
    for (let i = 0; i < tDiameters.length-1; i++) {
      const currentDiam:number = tDiameters[i];
      const nextDiameter:number = tDiameters[i+1];
      const sum = currentDiam + nextDiameter;
      const prom = sum / 2;
      resp.push(prom);
    }
    return resp;
  }

  calcSoilPortions(): Array<number> {
    const soilWeights = this._getSoilWeights();
    soilWeights.shift();
    const totalSoilWeight: number = this.calcTotalSoilWeight();
    const soilPortions = soilWeights.map(sp => {      
      const divRaw = sp / totalSoilWeight;
      const divFixed =  this._adustPrecision(Number(divRaw.toFixed(9)));
      return divFixed;
    });
    return soilPortions;
  }

  calcMWDs(): Array<number> {
    const soilWeights: Array<number> = this.calcTamizDiameterProm();
    const soilPortions: Array<number> = this.calcSoilPortions();
    
    if(soilWeights.length != soilPortions.length) {
      throw new Error("unexpected: soilWeights.length != soilPortions.length");
    }

    const resp: number[] = [];
    for (let i = 0; i < soilWeights.length; i++) {
      const soilWeight = soilWeights[i];
      const soilPortion = soilPortions[i];
      const multiRaw = soilWeight * soilPortion;
      const multiFixed = this._adustPrecision(multiRaw);
      resp.push(multiFixed);
    }
    
    return resp;
  }

  calcMWDTotal(): number {
    const MWDs = this.calcMWDs();
    let resp = 0;
    for (let i = 0; i < MWDs.length; i++) {
      resp = resp + MWDs[i];
    }
    return resp;
  }

  private _getTamizDiameters(): number[] {
    const all = Array.from(this._samplesRows.values()).map(v => v.tamizDiameter);
    return all;
  }

  private _getSoilWeights(): Array<number> {
    const all = Array.from(this._samplesRows.values()).map(v => v.soilWeight);
    return  all;
  }

  private _adustPrecision(original: number): number {
    const fixed = Number(original.toFixed(CalculatorImpl.precision));
    return fixed;
  }

  private _adustPrecisionSample(): void {
    this._samplesRows.values()
  }

  public hello(name: string): string {
    return `Hello ${name}`;
  }

}

