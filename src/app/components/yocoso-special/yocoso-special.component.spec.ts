import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YocosoSpecialComponent } from './yocoso-special.component';

describe('YocosoSpecialComponent', () => {
  let component: YocosoSpecialComponent;
  let fixture: ComponentFixture<YocosoSpecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YocosoSpecialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YocosoSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
