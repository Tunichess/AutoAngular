import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairRefubishmentComponent } from './repair-refubishment.component';

describe('RepairRefubishmentComponent', () => {
  let component: RepairRefubishmentComponent;
  let fixture: ComponentFixture<RepairRefubishmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairRefubishmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairRefubishmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
