import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-components-booking',
  templateUrl: './components-booking.component.html',
  styleUrls: ['./components-booking.component.css']
})
export class ComponentsBookingComponent implements OnInit {

  //property
  countries: any;
  formGroup: FormGroup | any = null;

  constructor(private countriesService: CountriesService) {
    this.formGroup = new FormGroup({
      email: new FormControl(null),
      customerName: new FormControl(null),
      country: new FormControl(null)
    });
  }

  ngOnInit(): void {
    this.countriesService.getCountries().subscribe(
      (response) => {
        this.countries = response;
      },
      (error) => {
        console.log(error);
      });
  }

}
