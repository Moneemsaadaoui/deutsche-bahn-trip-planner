import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { TripServiceService } from './trip-service.service';
import { of } from 'rxjs';

describe('TripServiceService', () => {
  let service: TripServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(TripServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should invoke http method and return data when TripServiceService method is called', () => {
    const httpService = TestBed.get(HttpClient);
    spyOn(httpService, "get").and.returnValue(of([{ dummyKey: "DummyValue" }]));
    const result = service.getTrip("1|7C1303520|7C0|7C80|7C11112022", "Bus 805");
    expect(httpService.get).toHaveBeenCalled();
    expect(result).not.toBeNull();
  });
});
