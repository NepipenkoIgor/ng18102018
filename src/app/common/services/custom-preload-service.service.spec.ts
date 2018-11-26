import { TestBed } from '@angular/core/testing';

import { CustomPreloadServiceService } from './custom-preload-service.service';

describe('CustomPreloadServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomPreloadServiceService = TestBed.get(CustomPreloadServiceService);
    expect(service).toBeTruthy();
  });
});
