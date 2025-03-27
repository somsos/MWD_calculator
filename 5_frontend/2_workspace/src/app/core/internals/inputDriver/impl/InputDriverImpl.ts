import { MapSamples, IResultsDto } from "../../../../0shared";
import { CalculatorImpl } from "../../logic/CalculatorImpl";
import { IInputDriver } from "../IInputDriver";

export class InputDriverImpl implements IInputDriver {

  resolveSamples(samplesRows1: MapSamples): IResultsDto {
    const calc = new CalculatorImpl();

    // it must be added or will throw error
    calc.setData(samplesRows1);

    // this is the order of calc
    // Note: With just call make the other calculations, but just to represent the process is called like this.
    calc.calcTotalSoilWeight();
    calc.calcTamizDiameterProm();
    calc.calcSoilPortions();
    calc.calcMWDs();
    calc.calcMWDTotal();

    return calc.getResults();

  }

}
