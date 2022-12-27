import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AutocompleteServiceService } from './autocomplete-service.service';
import { of } from 'rxjs';

describe('AutocompleteServiceService', () => {
  let service: AutocompleteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(AutocompleteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should invoke http method and return data when AutocompleteServiceService method is called', () => {
    const httpService = TestBed.get(HttpClient);
    spyOn(httpService, "get").and.returnValue(of([{ dummyKey: "DummyValue" }]));
    const result = service.getSuggestions("duss");
    expect(httpService.get).toHaveBeenCalled();
    expect(result).not.toBeNull();
  });
});
