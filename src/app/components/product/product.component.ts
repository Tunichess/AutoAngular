import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TyresearchService } from 'src/app/services/tyresearch.service';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  quantity = 0;
  cartProducts:any =[]  
 
  constructor(private activatedRoute:ActivatedRoute, 
    private service:TyresearchService, 
    private cart:CartService,
    private toastr: ToastrService) { }

  ngOnInit() {
  this.activatedRoute.params.subscribe((data:any)=>{
    if(data!=undefined && data !=null){
      this.service.GetProduct(data.id).subscribe((data:any)=>{
    
        this.product = data.Results[0];
        this.quantity = this.getOcurrences(this.product.ProductCode);
      })
    }
   
  })
  this.getCart();
  }

  GetAvailability(){
    if(this.product.Stock  >= 1){
      return "in stock";
    }
     return "out of stock"
     
  }
  
  getCart(){
    this.cart.getProducts().subscribe((data:any)=>{
      this.cartProducts = data;
    })
  }

  getOcurrences(id:any){
    var ocurrences = [];
    this.cart.getProducts().subscribe((occ:any)=>{
         ocurrences =  occ.filter(e=>e.ProductCode ==id);
    });
     console.log(ocurrences);
     return ocurrences.length;

  }

  add(){
    
    if( this.product.Stock - this.getOcurrences(this.product.ProductCode)-1>=0){
      this.quantity++;
     this.cart.addProduct(this.product);
      this.toastr.success(this.product.DescriptionShort + ' added to cart!');
    }else{
      this.toastr.warning("Note - Can't add to the cart");
    }
  }

  remove(){
    if(this.quantity>0){
      this.quantity--;
      this.cart.removeElementProduct(this.product);
      this.toastr.success(this.product.DescriptionShort + ' removed!');
    }
  }


  // addOcurrence(element:any){
  //   // console.log(element);
  //   let item = this.product;
  //   // console.log(item);
  // if(element.Stock -item.ocurrences-1 >0){
  //   this.cart.addProduct(element);
  //   this.cart.getProducts().subscribe((data:any)=>{
  //     // console.log(data);
  //     // this.products = data;
  //     this.cart.addProduct(this.product);
  //     this.toastr.success(this.product.DescriptionShort + ' added to cart!');
  //   })
  // }else{
  //   this.toastr.warning("Note - Can't add to the cart");
  // }
    
  // }

  // deleteOcurrence(element:any){
  //   this.cart.removeElementProduct(element);
  //   this.cart.getProducts().subscribe((data:any)=>{
  //     // console.log(data);
  //     this.products = data;
  //     this.getOcurrences(this.products);
  //   })
  // }

  addToCart(){

    if( this.product.Stock - this.getOcurrences(this.product.ProductCode)-this.quantity>0){

      for(var i=0;i<this.quantity;i++){
        this.cart.addProduct(this.product);
       
      }
      this.toastr.success(this.product.DescriptionShort + ' added to cart!');
    }else{
      this.toastr.warning("Note - Can't add to the cart");
    }
  }

  product:any =    {
    "ProductCode": "",
    "DescriptionShort": "",
    "DescriptionLong": "",
    "Attributes": {
      "ManufacturersCode": "",
      "EAN": "",
      "MainProductImage": "",
      "Category": "",
      "Size": "",
      "Brand": "",
      "Pattern": "",
      "Load_Speed" : "",
      "PlyRating": "",
      "BrandCategory": "",
      "RunOnFlat": "",
      "OESidewall": "",
      "Season": "",
      "FuelEfficiencyRating": "",
      "WetGripRating": "",
      "NoiseRating_db": "",
      "NoiseRatingClass": "",
      "EUTyreClassReference": "",
      "Homologation": "",
      "MoldID": "",
      "SelfSeal": "",
      "TreadDepth_mm": "",
      "NoiseCancelling": "",
      "ProdSupersededBy": "",
      "ProdSupersedes": "",
      "RimProtection": "",
      "ProductWeight_kg": ""
    },
    "Price": "",
    "Stock": "",
    "DeliveryDate": "",
    "DeliverySlot": ""
  }

}
