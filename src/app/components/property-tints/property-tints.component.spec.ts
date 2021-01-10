import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyTintsComponent } from './property-tints.component';

describe('PropertyTintsComponent', () => {
  let component: PropertyTintsComponent;
  let fixture: ComponentFixture<PropertyTintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyTintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyTintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
