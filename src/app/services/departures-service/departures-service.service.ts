import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departure } from '../../models/Departure.model';
const baseurl = "https://v5.db.transport.rest/stops/";

@Injectable({
  providedIn: 'root'
})
export class DeparturesServiceService {

  constructor(private http: HttpClient) { }
  getDepartures(id: string, date: Date): Observable<Departure[]> {
    return this.http.get<any>(baseurl + id + "/departures?when=" + date.toISOString())
  }
}
