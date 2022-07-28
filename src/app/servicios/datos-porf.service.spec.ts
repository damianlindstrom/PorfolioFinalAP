import { TestBed } from '@angular/core/testing';

import { DatosPorfService } from './datos-porf.service';

describe('DatosPorfService', () => {
  let service: DatosPorfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosPorfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
