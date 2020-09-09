import { Component, OnInit } from '@angular/core';
import {CountryList} from './CountryList';
import {CountryListService} from './country-list.service';

@Component({
  selector: 'app-country-list',
  template: `<li *ngFor="let country of countries">
                  <div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">{{country.name}}</h5>
                      <p class="card-text">{{country.capital}} - {{country.region}}</p>
                      <img src="{{country.flag}}" height="64" width="107"/>
                    </div>
                  </div>
             </li>`,
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  countries: CountryList[];
  constructor(private countriesListService: CountryListService) { }

  ngOnInit(): void {
    this.countriesListService.getCountriesInfo().subscribe(data => {
      this.countries = data;
    });
  }

}
