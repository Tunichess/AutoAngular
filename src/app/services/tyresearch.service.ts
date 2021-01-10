import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TyresearchService {
API:string = environment.API + "/Prod/search";
products: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  constructor(private http:HttpClient) {
    this.GetProducts();
   }

  GetProducts(size?){
    let url = this.API;
    if(size!=null && size!=undefined){
      url = url+ `?size=${size}`;
    }
     this.http.get(url).subscribe((data:any)=>{
       console.log(data);
      this.setProducts(data.Results);
    });
  }

  FilteredProducts(size?){
    let url = this.API;
    if(size!=null && size!=undefined){
      url = url+ `?size=${size}`;
    }
    return this.http.get(url);
  }

  GetProduct(id:any){
    // console.log(id);
    console.log("getone");
    return  this.http.get(this.API + `?productid=${id}`);
  }

  setProducts(products:any){
    this.products.next(products);
  }
  
  getSavedProducts(){
    return this.products.asObservable();
  }
}
