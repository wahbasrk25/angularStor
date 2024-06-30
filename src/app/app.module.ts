import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { AllProductsComponent } from './components/products/all-products/all-products.component';
import { ProductsDetalisComponent } from './components/products/products-detalis/products-detalis.component';
import { FormsModule } from '@angular/forms';
import { CardsComponent } from './components/cards/cards/cards.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllProductsComponent,
    ProductsDetalisComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
