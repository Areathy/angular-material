import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsBookingComponent } from './booking.component';

describe('ComponentsBookingComponent', () => {
  let component: ComponentsBookingComponent;
  let fixture: ComponentFixture<ComponentsBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
