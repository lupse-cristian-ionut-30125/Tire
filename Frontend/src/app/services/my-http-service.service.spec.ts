import { TestBed } from '@angular/core/testing';

import { TyreService } from './my-http-service.service';

describe('MyHttpServiceService', () => {
  let service: TyreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TyreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
