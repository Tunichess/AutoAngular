import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineCleaningComponent } from './engine-cleaning.component';

describe('EngineCleaningComponent', () => {
  let component: EngineCleaningComponent;
  let fixture: ComponentFixture<EngineCleaningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineCleaningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
