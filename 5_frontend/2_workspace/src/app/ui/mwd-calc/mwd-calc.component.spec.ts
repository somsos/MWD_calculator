import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MwdCalcComponent } from './mwd-calc.component';

describe('MwdCalcComponent', () => {
  let component: MwdCalcComponent;
  let fixture: ComponentFixture<MwdCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MwdCalcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MwdCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
