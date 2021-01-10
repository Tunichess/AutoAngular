import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.scss']
})
export class ViewcartComponent implements OnInit {
products:any = []
showingProducts:any = []
total:number = 0;
  constructor(private cart:CartService,private toastr: ToastrService) { }

  ngOnInit() {
    this.cart.getProducts().subscribe((data:any)=>{
      // console.log(data);
      this.products = data;
      this.getOcurrences(this.products);
    })
  }

  getOcurrences(list:any){
    this.showingProducts = [];
    list.forEach(element => {
      var ocurrences = 0;
      list.forEach(element2 => {
        if(element.ProductCode == element2.ProductCode){
          ocurrences++;
        }
      });
      
      if(this.showingProducts.find(p =>p.product.ProductCode==element.ProductCode)==undefined){

        this.showingProducts.push({product:element,ocurrences:ocurrences});
      }
      
    });
    this.getTotal();
   
  }
  getTotal(){
    this.total = 0;
    this.showingProducts.forEach(element=>{
      this.total = this.total + element.product.Price * element.ocurrences;
    })
  }

  addOcurrence(element:any){
    // console.log(element);
    let item = this.showingProducts.find(e=>e.product.ProductCode ==element.ProductCode);
    console.log(item);
  if(element.Stock -item.ocurrences-1 >=0){
    this.cart.addProduct(element);
    this.cart.getProducts().subscribe((data:any)=>{
      // console.log(data);
      this.products = data;
      this.getOcurrences(this.products);
    })
  }else{
    this.toastr.warning("Note - Can't add to the cart");
  }
    
  }

  deleteOcurrence(element:any){
    this.cart.removeElementProduct(element);
    this.cart.getProducts().subscribe((data:any)=>{
      // console.log(data);
      this.products = data;
      this.getOcurrences(this.products);
    })
  }

  remove(element:any){
    this.cart.removeProduct(element);
    this.cart.getProducts().subscribe((data:any)=>{
      // console.log(data);
      this.products = data;
      this.getOcurrences(this.products);
    })
  }

}
