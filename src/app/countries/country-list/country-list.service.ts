import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CountryList} from './CountryList';

@Injectable({
  providedIn: 'root'
})
export class CountryListService {

  // URL = 'https://restcountries.eu/rest/v2/region/europe?fields=name;flag;capital;region';
  constructor(private http: HttpClient) { }

  getCountriesInfo(): Observable<CountryList[]>{
    return this.http.get<CountryList[]>('https://restcountries.eu/rest/v2/region/europe?fields=name;flag;capital;region');
  }
}
