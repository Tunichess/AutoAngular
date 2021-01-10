import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  products: BehaviorSubject<Array<any>> = new BehaviorSubject([]);

  empty(){
    this.products.next([]);
  }



  removeProduct(product) {
    var prods = this.products.value.filter(e=> e.ProductCode!=product.ProductCode)
      this.products.next(prods);
  }

  addProduct(dataObj) {
      const currentValue = this.products.value;
      const updatedValue = [...currentValue, dataObj];
      this.products.next(updatedValue);
      console.log(this.products);
  }

  removeElementProduct(product){
    const index: number = this.products.value.findIndex(e=>e.ProductCode ==product.ProductCode);
    console.log(index);
    if (index !== -1) {
     this.products.value.splice(index, 1);
     console.log(this.products.value);
     this.products.next(this.products.value);

    }  
  }



  getProducts(){
  return this.products.asObservable();
  }

  // getProduct()
}
