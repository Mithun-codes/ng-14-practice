import { TestBed } from '@angular/core/testing';

import { Test1ApiService } from './test1-api.service';

describe('Test1ApiService', () => {
  let service: Test1ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Test1ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
