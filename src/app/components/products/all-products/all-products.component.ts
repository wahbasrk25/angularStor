import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

productData:any[] = [];

categories:any[] = [];



  constructor(private allProduct:ProductService) { }

  ngOnInit(): void {

    this.getAllProduct();
    this.getAllCategoriesProduct();
  }

 getAllProduct(){

     this.allProduct.getConected().subscribe(
      (res)=>{

         this.productData = res
         
      },
      (err)=>{

        console.log(err);
      }
     )
 }

 getAllCategoriesProduct(){

  this.allProduct.getAllCategoies().subscribe(
   (res)=>{

      this.categories = res
      
   },
   (err)=>{

     console.log(err);
   }
  )
}


getChange(event:any){

    let val = event.target.value;
     this.getCategories(val);
     console.log(val);
}
 
getCategories(keyword:string){

  this.allProduct.getProductsByCategories(keyword).subscribe(

    (res:any)=>{

       this.productData = res ;
    }
  )
}


}
