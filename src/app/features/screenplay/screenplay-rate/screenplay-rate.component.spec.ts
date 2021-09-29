import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenplayRateComponent } from './screenplay-rate.component';

describe('ScreenplayRateComponent', () => {
  let component: ScreenplayRateComponent;
  let fixture: ComponentFixture<ScreenplayRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenplayRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenplayRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
