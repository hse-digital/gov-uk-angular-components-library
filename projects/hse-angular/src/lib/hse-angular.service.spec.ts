import { TestBed } from '@angular/core/testing';

import { HseAngularService } from './hse-angular.service';

describe('HseAngularService', () => {
  let service: HseAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HseAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
