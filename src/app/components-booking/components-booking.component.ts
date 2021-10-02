import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../services/countries.service';
import { CustomErrorStateMatcher } from "../helpers/customErrorStateMatcher";
import { City } from '../models/City';
import { CitiesService } from '../services/cities.service';

@Component({
  selector: 'app-components-booking',
  templateUrl: './components-booking.component.html',
  styleUrls: ['./components-booking.component.css']
})
export class ComponentsBookingComponent implements OnInit {

  //property
  countries: any;
  formGroup: FormGroup | any = null;
  customErrorStateMatcher: CustomErrorStateMatcher = new CustomErrorStateMatcher();
  cities: City[] = [];
  isCitiesLoading: boolean = false;

  constructor(private countriesService: CountriesService, private citiesService: CitiesService) {
    this.formGroup = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      customerName: new FormControl(null, [Validators.required, Validators.maxLength(30), Validators.pattern('^[A-Za-z. ]*$')]),
      country: new FormControl(null, [Validators.required]),
      city: new FormControl(null)
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

      this.citiesService.getCities().subscribe(
        (response) => {
          this.cities = response;
        },
        (error) => {
          console.log(error);
        });
  }

  //returns the form control instance based on the control name
  getFormControl(controlName: string): FormControl {
    return this.formGroup.get(controlName) as FormControl;
  }

  //returns the error message based on the given control and error
  getErrorMessage(controlName: string, errorType: string): string {
    //controlName = "customerName"
    //errorType = "required"
    switch (controlName)  {
      case "customerName":  {
          if (errorType === "required")
            return "You must specify <strong>Name</strong>";
          else if (errorType === "maxlength")
            return "<strong>Name</strong> can contain up to 30 characters only";
          else if (errorType === "pattern")
            return "<strong>Name</strong> can contain alphabets or dot (.) or space only";
          else
            return "";
        }

      case "email": {
          if (errorType === "required")
            return "<strong>Email</strong> can't be blank";
          else if (errorType === "email")
            return "<strong>Email</strong> should be in correct format. Eg: someone@example.com";
          else
            return "";
        }

      case "country":  {
          if (errorType === "required")
            return "You must choose a <strong>Country</strong>";
          else
            return "";
        }

      default: return "";
    }
  }

}
