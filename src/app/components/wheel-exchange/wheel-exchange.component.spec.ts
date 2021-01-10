import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelExchangeComponent } from './wheel-exchange.component';

describe('WheelExchangeComponent', () => {
  let component: WheelExchangeComponent;
  let fixture: ComponentFixture<WheelExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WheelExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
