import { TestBed } from '@angular/core/testing';

import { AutocompleteServiceService } from './autocomplete-service.service';

describe('AutocompleteServiceService', () => {
  let service: AutocompleteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutocompleteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
