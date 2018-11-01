import { TestBed } from '@angular/core/testing';

import { MihttpService } from './mihttp.service';

describe('MihttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MihttpService = TestBed.get(MihttpService);
    expect(service).toBeTruthy();
  });
});
