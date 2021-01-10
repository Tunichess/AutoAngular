import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyDiscountComponent } from './key-discount.component';

describe('KeyDiscountComponent', () => {
  let component: KeyDiscountComponent;
  let fixture: ComponentFixture<KeyDiscountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyDiscountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
