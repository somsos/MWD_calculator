import { Component, Input, OnInit, Signal, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { IResultsDto, MapSamples } from '../../0shared';
import { IInputDriver } from '../../core';
import { InputDriverImpl } from '../../core/internals/inputDriver/impl/InputDriverImpl';

@Component({
  selector: 'mwd-calc',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule
  ],
  templateUrl: './mwd-calc.component.html',
  styleUrls: ['./mwd-calc.component.scss']
})
export class MwdCalcComponent {

  @Input()
  public results?: IResultsDto;



}
