import { Component, OnInit, signal } from '@angular/core';
import { SamplesTableComponent } from '../samples-table/samples-table.component';

@Component({
  selector: 'main-layout-root',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  standalone: true,
  imports: [ SamplesTableComponent ],
})
export class MainLayoutComponent {
  title = 'mwd_calculator';
  count = signal(0);



  increase() {
    this.count.update((v) => v + 1);
  }

  decrease() {
    this.count.update((v) => v - 1);
  }
}
