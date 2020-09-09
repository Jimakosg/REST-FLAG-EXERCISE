import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ProductsModule } from './products/products.module';
import {CountriesModule} from './countries/countries.module';
import {CountryListComponent} from './countries/country-list/country-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    HttpClientModule,
    CountriesModule,
  ],
  providers: [],
  bootstrap: [AppComponent, CountryListComponent]
})
export class AppModule { }
