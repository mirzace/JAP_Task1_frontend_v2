import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenplayPreviewComponent } from './screenplay-preview.component';

describe('ScreenplayPreviewComponent', () => {
  let component: ScreenplayPreviewComponent;
  let fixture: ComponentFixture<ScreenplayPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenplayPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenplayPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
