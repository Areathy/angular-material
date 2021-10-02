import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  urlPrefix: string = "http://localhost:7000";

  constructor(private httpClient: HttpClient) { }

  getCountries(): Observable<any> {
    return this.httpClient.get<any>(this.urlPrefix + "/countries");
  }
}
