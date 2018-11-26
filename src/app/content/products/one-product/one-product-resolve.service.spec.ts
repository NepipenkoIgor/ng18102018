import { TestBed } from '@angular/core/testing';

import { OneProductResolveService } from './one-product-resolve.service';

describe('OneProductResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OneProductResolveService = TestBed.get(OneProductResolveService);
    expect(service).toBeTruthy();
  });
});
