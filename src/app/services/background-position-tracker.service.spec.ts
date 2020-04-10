import { TestBed } from '@angular/core/testing';

import { BackgroundPositionTrackerService } from './background-position-tracker.service';

describe('BackgroundPositionTrackerService', () => {
  let service: BackgroundPositionTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackgroundPositionTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
