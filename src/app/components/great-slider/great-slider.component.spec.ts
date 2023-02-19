import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatSliderComponent } from './great-slider.component';

describe('GreatSliderComponent', () => {
  let component: GreatSliderComponent;
  let fixture: ComponentFixture<GreatSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreatSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreatSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
