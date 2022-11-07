import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutoCompleteResult } from '../models/AutoCompleteResult.model';

const baseurl = "https://v5.db.transport.rest/locations?query=";
@Injectable({
  providedIn: 'root'
})
export class AutocompleteServiceService {

  constructor(private http: HttpClient) { }
  getSuggestions(keyword: string): Observable<AutoCompleteResult[]> {
    return this.http.get<any>(baseurl + keyword)
  }
}
