import { Component, EventEmitter, Inject, Input, OnInit, Output, Signal, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { IResultsDto, MapSamples } from '../../0shared';
import { CoreNames, IOutputDriver } from '../../core';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'mwd-results',
  standalone: true,
  imports: [
    MaterialModule,
  ],
  templateUrl: './mwd-results.component.html',
  styleUrls: ['./mwd-results.component.scss']
})
export class MwdResultsComponent {

  @Input()
  public results?: IResultsDto;

  @Output()
  public readonly downloadClick = new EventEmitter<void>();


  onClickDownloadEvent() {
    this.downloadClick.emit();
  }


}
