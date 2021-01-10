import { Component, OnInit } from "@angular/core";
import { TyresearchService } from "src/app/services/tyresearch.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CartService } from "src/app/services/cart.service";
import { ToastrService } from "ngx-toastr";
import { MatDialog } from '@angular/material';

@Component({
  selector: "app-tyre-search",
  templateUrl: "./tyre-search.component.html",
  styleUrls: ["./tyre-search.component.scss"],
})
export class TyreSearchComponent implements OnInit {
  Results: any = [];
  ResultsAux: any = [];
  ShowingList: any = [];
  filters: FormGroup;
  Brands: any = [];
  showing: number = 20;
  loading: boolean = true;
  cartProducts: any = [];
  messageWidth = false;
  messageRim = false;
  messageRatio = false;
  constructor(
    private service: TyresearchService,
    private cart: CartService,
    private toastr: ToastrService,
    public dialog: MatDialog
  ) {
    this.filters = new FormGroup({
      width: new FormControl("", [Validators.required]),
      ratio: new FormControl("", [Validators.required]),
      rim: new FormControl("", [Validators.required]),
      speed: new FormControl(),
      brand: new FormControl("Select"),
    });
  }

  ngOnInit() {

    this.service.getSavedProducts().subscribe((data: any) => {
      // console.log(data);
      if (data.length > 0) {

        data = data.sort((a,b) =>(a.Price - b.Price)).filter(e=>e.Stock>0);
        console.log(data);
        this.loading = false;
        this.Results = data;
        this.ResultsAux = data;
        this.ShowingList = this.Results.slice(0, 20);

        data.forEach((element) => {
          if (!this.Brands.includes(element.Attributes.Brand)) {
            this.Brands.push(element.Attributes.Brand);
          }
        });
        this.Brands = this.Brands.sort((one, two) => (one > two ? 1 : -1));
      }
    });

    this.getCart();
  }

  filter() {
    this.messageRatio = false;
    this.messageRim = false;
    this.messageWidth = false;
    if (this.filters.valid) {
      this.loading = true;
      let param =
        this.filters.get("width").value +
        this.filters.get("ratio").value +
        this.filters.get("rim").value;

        this.service.FilteredProducts(param).subscribe((data:any)=>{
          data.Results = data.Results.sort((a,b) =>(a.Price - b.Price)).filter(e=>e.Stock>0);
          this.Results = data.Results;
          this.ResultsAux = data.Results;
          this.ShowingList = this.Results.slice(0, 20);
          this.loading = false;

        })

      
    }else{
      if( this.filters.get("width").value.length==0 && this.filters.get("ratio").value.length==0
       && this.filters.get("rim").value.length==0){
        this.loading = true;
        this.service.FilteredProducts().subscribe((data:any)=>{
    
          data.Results = data.Results.sort((a,b) =>(a.Price - b.Price)).filter(e=>e.Stock>0);
          this.Results = data.Results;
          this.ResultsAux = data.Results;
          this.ShowingList = this.Results.slice(0, 20);
          this.loading = false;

        })
       }else{
        this.showMessage();
       }
    }
  }

  addProduct(product: any) {
    if (product.Stock - this.getOcurrences(product.ProductCode) - 1>=0) {
  
      this.cart.addProduct(product);
      this.toastr.success(product.DescriptionShort + " added to cart!");
    } else {
      this.toastr.warning("Note - Can't add to the cart");
    }
  }

  numbersOnly(event) {
    var key = event.keyCode;
    if (key > 31 && (key < 47 || key > 57)) return false;
    if (event.shiftKey) return false;
    return true;
  }

  loadMore() {
    this.showing = this.showing + 20;
    this.ShowingList = this.Results.slice(0, this.showing);
  }

  getCart() {
    this.cart.getProducts().subscribe((data: any) => {
      this.cartProducts = data;
    });
  }

  getOcurrences(id: any) {
    var ocurrences = [];
    this.cart.getProducts().subscribe((occ: any) => {
      ocurrences = occ.filter((e) => e.ProductCode == id);
    });
    console.log(ocurrences.length);
    return ocurrences.length;
  }

  showMessage(){
    if( this.filters.get("width").value.length==0 ){
      this.messageWidth = true;
    }
    if( this.filters.get("ratio").value.length==0 ){
      this.messageRatio = true;
    }
    if( this.filters.get("rim").value.length==0 ){
      this.messageRim = true;
    }

  }

  openModal(){
    this.dialog.open(FiltersExampleDialog);
    
  }
}


@Component({
  selector: 'filters-example',
  templateUrl: './filters-example.html',
  styleUrls: ["./tyre-search.component.scss"],
})
export class FiltersExampleDialog {

  constructor() {

  }






}
