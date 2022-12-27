import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trip } from '../../models/Trip.model';
const baseurl = "https://v5.db.transport.rest/trips/";

@Injectable({
  providedIn: 'root'
})
export class TripServiceService {

  constructor(private http: HttpClient) { }
  getTrip(id: string, lineName: string): Observable<Trip> {
    return this.http.get<any>(baseurl + id + "?lineName=" + lineName + "&polyline=true")
  }
}


