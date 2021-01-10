import { TestBed } from '@angular/core/testing';

import { TyresearchService } from './tyresearch.service';

describe('TyresearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TyresearchService = TestBed.get(TyresearchService);
    expect(service).toBeTruthy();
  });
});
