import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleWrappingComponent } from './vehicle-wrapping.component';

describe('VehicleWrappingComponent', () => {
  let component: VehicleWrappingComponent;
  let fixture: ComponentFixture<VehicleWrappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleWrappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleWrappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
