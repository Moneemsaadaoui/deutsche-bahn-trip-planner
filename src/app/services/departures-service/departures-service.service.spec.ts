import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DeparturesServiceService } from './departures-service.service';
import { of } from 'rxjs';

describe('DeparturesServiceService', () => {
  let service: DeparturesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(DeparturesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });



  it('should invoke http method and return data when DeparturesServiceService method is called', () => {
    const httpService = TestBed.get(HttpClient);
    spyOn(httpService, "get").and.returnValue(of([{ dummyKey: "DummyValue" }]));
    const result = service.getDepartures("8000085", new Date());
    expect(httpService.get).toHaveBeenCalled();
    expect(result).not.toBeNull();
  });
});
