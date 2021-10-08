import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Booking } from "../models/booking";

@Injectable({
  providedIn: "root"
})
export class BookingsService {
  
  urlPrifix: string = "http://localhost:7000";
  constructor(private httpClient: HttpClient) { }

  getBookings(): Observable<Booking[]> {
    return this.httpClient.get<Booking[]>( this.urlPrifix + `/bookings`);
  }
}

