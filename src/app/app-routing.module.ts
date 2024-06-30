import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { AllProductsComponent } from './components/products/all-products/all-products.component';
import { CardsComponent } from './components/cards/cards/cards.component';
import { ProductsDetalisComponent } from './components/products/products-detalis/products-detalis.component';

const routes: Routes = [
  {path:'nav' , component:NavbarComponent},
  {path:'products' , component:AllProductsComponent},
  {path:'cards' , component:CardsComponent},
  {path:'detalis', component:ProductsDetalisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
