import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CountryList} from '../countries/country-list/CountryList';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  // URL = 'https://restcountries.eu/rest/v2/region/europe?fields=name;flag;capital;region';
  constructor(private http: HttpClient) { }

  getCountries(): Observable<CountryList[]>{
    return this.http.get<CountryList[]>('https://restcountries.eu/rest/v2/');
  }

}
