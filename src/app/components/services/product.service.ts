import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

 
   getConected():Observable<any>{

       return this.http.get('https://fakestoreapi.com/products');
   }


   getAllCategoies():Observable<any>{

      return this.http.get('https://fakestoreapi.com/products/categories');
   }

   getProductsByCategories(keyword:string){

    return this.http.get('https://fakestoreapi.com/products/category'+keyword);
   }

}
