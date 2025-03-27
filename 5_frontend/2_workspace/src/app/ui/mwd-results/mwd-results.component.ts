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
  selector: 'mwd-results',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule
  ],
  templateUrl: './mwd-results.component.html',
  styleUrls: ['./mwd-results.component.scss']
})
export class MwdResultsComponent {

  @Input()
  public results?: IResultsDto;



}
