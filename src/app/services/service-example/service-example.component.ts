import { Component, OnInit } from '@angular/core';
import {CountriesService} from '../countries.service';
import {CountryList} from '../../countries/country-list/CountryList';

@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.scss']
})
export class ServiceExampleComponent implements OnInit {

  countries: CountryList[];
  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countriesService.getCountriesAndCapital().subscribe((data) => { this.countries = data; });
  }

}
