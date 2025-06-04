// rules

interface IRowSample {
  soilWeight: number,
  tamizDiameter: number
}

type MapSamples = Map<number,  IRowSample>;


export interface IResultsDto {

  totalSoilWeight: number;

  tamizDiameterProm: number[];

  soilPortions: number[];

  MWDs: number[];

  MWDTotal: number;

}


interface ICalculator {

  setData(samplesRows: MapSamples): void;

  calcTotalSoilWeight(): number;

  calcTamizDiameterProm(): Array<number>;

  calcSoilPortions(): Array<number>;

  calcMWDs(): Array<number>;

  calcMWDTotal(): number;
  
  hello(name: string): void;

}

// implementation
class CalculatorImpl implements ICalculator {

  private _samplesRows!: MapSamples;

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




// Input

const samplesRows1: MapSamples = new Map([
  [ 0, { tamizDiameter: 10.0,  soilWeight: 0.    }  ],
  [ 1, { tamizDiameter: 7.0,   soilWeight: 5.5   }  ],
  [ 2, { tamizDiameter: 5.5,   soilWeight: 0.25  }  ],
  [ 3, { tamizDiameter: 4.4,   soilWeight: 20.11 }  ],
  [ 4, { tamizDiameter: 1.1,   soilWeight: 31.50 }  ],
  [ 5, { tamizDiameter: 0.25,  soilWeight: 10.05 }  ],
  [ 6, { tamizDiameter: 0.10,  soilWeight: 35.10 }  ],
  [ 7, { tamizDiameter: 0.05,  soilWeight: 15.22 }  ],
]);

// Output Expected

const outputExpected: IResultsDto = {
  
  totalSoilWeight: 117.73,
  
  MWDTotal: 2.11,
  
  tamizDiameterProm: [ 8.5, 6.25, 4.95, 2.75, 0.675, 0.175, 0.075, ],

  // 0.027777778, Careful: the length is 1 less that the samples
  soilPortions: [ 0.046717064, 0.002123503, 0.170814576, 0.267561369, 0.085364818, 0.298139811, 0.129278858, ],

  MWDs: [ 0.397095044, 0.013271894, 0.845532151, 0.735793765, 0.057621252, 0.052174467, 0.009695914, ],

}



// Initiation
const calc = new CalculatorImpl();
calc.setData(samplesRows1);



// Execution
const outputGot: IResultsDto = {
  totalSoilWeight: calc.calcTotalSoilWeight(),
  
  tamizDiameterProm: calc.calcTamizDiameterProm(),

  soilPortions: calc.calcSoilPortions(),

  MWDs: calc.calcMWDs(),

  MWDTotal: calc.calcMWDTotal()
}









// Comparison got with expected

// 
if(outputGot.totalSoilWeight !== outputExpected.totalSoilWeight) {
  throw new Error("Value expected and got different");
}


//
for (let i = 0; i < outputGot.tamizDiameterProm.length; i++) {
  const got = Number(outputGot.tamizDiameterProm[i].toFixed(3));
  const expected = outputExpected.tamizDiameterProm[i];
  if(got !== expected) {
    throw new Error("Value expected and got different");
  }
}

// 
for (let i = 0; i < outputGot.soilPortions.length; i++) {
  const got = outputGot.soilPortions[i];
  const expected = outputExpected.soilPortions[i];
  if(got !== expected) {
    throw new Error("Value expected and got different");
  }
}

//
for (let i = 0; i < outputGot.MWDs.length; i++) {
  const got = outputGot.MWDs[i].toFixed(7);
  const expected = outputExpected.MWDs[i].toFixed(7); //OBSERVE: that we reduce the precision to avoid exaggerated comparison

  if(got !== expected) {
    throw new Error("Value expected and got different");
  }
  
}

//
const FixedMWDTotal = Number(outputGot.MWDTotal.toFixed(2));
if(FixedMWDTotal !== outputExpected.MWDTotal) {
  throw new Error("Value expected and got different");
}

console.log("Calculo exitoso");
