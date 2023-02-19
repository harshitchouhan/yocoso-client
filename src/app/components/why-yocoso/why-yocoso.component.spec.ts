import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyYocosoComponent } from './why-yocoso.component';

describe('WhyYocosoComponent', () => {
  let component: WhyYocosoComponent;
  let fixture: ComponentFixture<WhyYocosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyYocosoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyYocosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
