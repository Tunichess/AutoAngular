import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomotiveTintsComponent } from './automotive-tints.component';

describe('AutomotiveTintsComponent', () => {
  let component: AutomotiveTintsComponent;
  let fixture: ComponentFixture<AutomotiveTintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomotiveTintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomotiveTintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
