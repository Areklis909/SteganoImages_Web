import { TestBed } from '@angular/core/testing';

import { SteganoConnectorService } from './stegano-connector.service';

describe('SteganoConnectorService', () => {
  let service: SteganoConnectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SteganoConnectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
