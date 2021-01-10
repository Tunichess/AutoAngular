import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValetingComponent } from './valeting.component';

describe('ValetingComponent', () => {
  let component: ValetingComponent;
  let fixture: ComponentFixture<ValetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
