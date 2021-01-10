import { Component, OnInit, ElementRef, ViewChild, Inject } from "@angular/core";
import { CartService } from "src/app/services/cart.service";
import { CheckoutService } from "src/app/services/checkout.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { DecimalPipe, DOCUMENT } from "@angular/common";
import { Router } from "@angular/router";

declare var Stripe;

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"],
})
export class CheckoutComponent implements OnInit {
  [x: string]: any;
  checkoutForm: FormGroup;
  products: any = [];
  showingProducts: any = [];
  total: number = 0;
  firstNameInvalid: boolean = false;
  lastNameInvalid: boolean = false;
  vehicleInvalid: boolean = false;
  cityInvalid: boolean = false;
  zipInvalid: boolean = false;
  emailInvalid: boolean = false;
  phoneInvalid: boolean = false;
  cardInvalid: boolean = false;
  monthInvalid: boolean = false;
  yearInvalid: boolean = false;
  cvcInvalid: boolean = false;
  yearInvalidLenght: boolean = false;
  monthInvalidLength: boolean = false;
  cvcInvalidLength: boolean = false;
  cardInvalidLength: boolean = false;
  monthInvalidNumber: boolean = false;
  loading = false;
  simpleError = "You must fill this field";

  stripe; // : stripe.Stripe;
  card;
  cardErrors;
  cardElement: ElementRef;
  show: boolean = false;
  // cardHandler = this.onChange.bind(this);
  @ViewChild("cardInfo", { static: false }) cardInfo: ElementRef;
  constructor(
    private cart: CartService,
    private checkoutService: CheckoutService,
    private tstr: ToastrService,
    private numberPipe: DecimalPipe,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.checkoutForm = new FormGroup({
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      vehicle: new FormControl("", Validators.required),
      // city: new FormControl("", Validators.required),
      // zip: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl("", Validators.required),
      card: new FormControl(""), //[Validators.required,Validators.minLength(16)]),
      month: new FormControl(""), // [Validators.required,Validators.minLength(2)]),
      year: new FormControl(""), //[Validators.required,Validators.minLength(2)]),
      cvc: new FormControl(""), // [Validators.required,Validators.minLength(3)])
    });
  }

  ngOnInit() {
    this.cart.getProducts().subscribe((data: any) => {
      // console.log(data);
      this.products = data;
      this.getOcurrences(this.products);
    });
    // this.stripe = Stripe('pk_test_GZ2gDaYkOzs4F0PGoVJk8wyY00wkcBpZQh');
    // const elements = this.stripe.elements();

    // this.card = elements.create('card');
    // console.log(this.cardInfo);
    // this.card.mount(this.cardInfo.nativeElement);
    // console.log(this.card.value);
    // this.card.mount(this.cardElement.nativeElement);
    // console.log(

    //   this.stripe.card
    // );
    // console.log(this.card);

    // this.card.addEventListener('change', ({ error }) => {
    //     this.cardErrors = error && error.message;
    // });
  }

  getOcurrences(list: any) {
    list.forEach((element) => {
      var ocurrences = 0;
      list.forEach((element2) => {
        if (element.ProductCode == element2.ProductCode) {
          ocurrences++;
        }
      });

      if (
        this.showingProducts.find(
          (p) => p.product.ProductCode == element.ProductCode
        ) == undefined
      ) {
        this.showingProducts.push({ product: element, ocurrences: ocurrences });
      }
    });

    this.getTotal();
  }
  getTotal() {
    this.total = 0;
    this.showingProducts.forEach((element) => {
      this.total = this.total + element.product.Price * element.ocurrences;
    });
  }

  checkout() {
    if (this.checkoutForm.valid) {
      this.firstNameInvalid = false;
      this.lastNameInvalid = false;
      this.vehicleInvalid = false;
      this.cityInvalid = false;
      this.zipInvalid = false;
      this.emailInvalid = false;
      this.phoneInvalid = false;
      this.cardInvalid = false;
      this.monthInvalid = false;
      this.yearInvalid = false;
      this.cvcInvalid = false;
      this.cardInvalidLength = false;
      this.monthInvalidLength = false;
      this.yearInvalidLenght = false;
      this.cvcInvalidLength = false;
      // if (
      //   this.checkoutForm.get("month").value < 1 ||
      //   this.checkoutForm.get("month").value > 12
      // ) {
      //   // console.log(this.checkoutForm.get('month').value);
      //   this.monthInvalidNumber = true;
      //   return;
      // } else {
      //   this.monthInvalidNumber = false;
      // }
      this.loading = true;
      let request = this.createRequest();
      this.checkoutService.checkout(request).subscribe(
        (data: any) => {
          // console.log(data);

          this.loading = false;
          if (data.OrderNumber != null && data.OrderNumber != undefined) {
            this.tstr.success(data.OrderNumber);
            // this.router.navigate(["/confirmation", data.OrderNumber]);
            this.document.location.href = 'https://oxfordperformanceautos.simplybook.it/v2/#book/service/9/count/1/';
          } else {
            this.tstr.error(data.Error);
          }
        },
        (err) => {
          // console.log("err",err);
          this.loading = false;
          this.tstr.error(err.error);
        }
      );
    } else {
      this.handleErrors();
    }
  }

  createRequest() {
    let products = [];
    this.showingProducts.forEach((element) => {
      products.push({
        ProductCode: element.product.ProductCode,
        Price: element.product.Price,
        Quantity: element.ocurrences,
        Description:element.product.DescriptionShort
      });
    });


    let checkout = {
      Order: {
        Customer: {
          FirstName: this.checkoutForm.get("firstName").value,
          LastName: this.checkoutForm.get("lastName").value,
          Vehregno: this.checkoutForm.get("vehicle").value,
          // VEHREGNO: this.checkoutForm.get("vehicle").value,
          Address: '',
          Town:'',// this.checkoutForm.get("city").value,
          PostCode:'',// this.checkoutForm.get("zip").value,
          Email: this.checkoutForm.get("email").value,
          Phone: this.checkoutForm.get("phone").value,
        },
        Products: products,
        OrderTotal: this.total,
        // CardNumber: this.checkoutForm.get("card").value,
        // Month: this.checkoutForm.get("month").value,
        // Year: this.checkoutForm.get("year").value,
        // CVC: this.checkoutForm.get("cvc").value,
      },
    };

    return checkout;
  }

  numbersOnly(event) {
    var key = event.keyCode;
    if (key > 31 && (key < 47 || key > 57)) return false;
    if (event.shiftKey) return false;
    return true;
  }

  handleErrors() {
    this.monthInvalidNumber = false;
    if (!this.checkoutForm.controls["firstName"].valid) {
      this.firstNameInvalid = true;
    } else {
      this.firstNameInvalid = false;
    }
    if (!this.checkoutForm.controls["lastName"].valid) {
      this.lastNameInvalid = true;
    } else {
      this.lastNameInvalid = false;
    }
    if (!this.checkoutForm.controls["vehicle"].valid) {
      this.vehicleInvalid = true;
    } else {
      this.vehicleInvalid = false;
    }
    if (!this.checkoutForm.controls["city"].valid) {
      this.cityInvalid = true;
    } else {
      this.cityInvalid = false;
    }
    if (!this.checkoutForm.controls["zip"].valid) {
      this.zipInvalid = true;
    } else {
      this.zipInvalid = false;
    }
    if (!this.checkoutForm.controls["email"].valid) {
      this.emailInvalid = true;
    } else {
      this.emailInvalid = false;
    }
    if (!this.checkoutForm.controls["phone"].valid) {
      this.phoneInvalid = true;
    } else {
      this.phoneInvalid = false;
    }
    if (!this.checkoutForm.controls["card"].valid) {
      if (
        this.checkoutForm.get("card").value.length < 16 &&
        this.checkoutForm.get("card").value.length > 0
      ) {
        this.cardInvalidLength = true;
        this.cardInvalid = false;
      } else {
        this.cardInvalidLength = false;
        this.cardInvalid = true;
      }
    } else {
      this.cardInvalidLength = false;
      this.cardInvalid = false;
    }
    if (!this.checkoutForm.controls["month"].valid) {
      if (
        this.checkoutForm.get("month").value.length < 2 &&
        this.checkoutForm.get("month").value.length > 0
      ) {
        this.monthInvalidLength = true;
        this.monthInvalid = false;
      } else {
        this.monthInvalidLength = false;
        this.monthInvalid = true;
      }
    } else {
      this.monthInvalidLength = false;
      this.monthInvalid = false;
    }
    if (!this.checkoutForm.controls["year"].valid) {
      if (
        this.checkoutForm.get("year").value.length < 2 &&
        this.checkoutForm.get("year").value.length > 0
      ) {
        this.yearInvalidLenght = true;
        this.yearInvalid = false;
      } else {
        this.yearInvalid = true;
        this.yearInvalidLenght = false;
      }
    } else {
      this.yearInvalidLenght = false;
      this.yearInvalid = false;
    }
    if (!this.checkoutForm.controls["cvc"].valid) {
      if (
        this.checkoutForm.get("cvc").value.length < 3 &&
        this.checkoutForm.get("cvc").value.length > 0
      ) {
        this.cvcInvalidLength = true;
        this.cvcInvalid = false;
      } else {
        this.cvcInvalidLength = false;
        this.cvcInvalid = true;
      }
    } else {
      this.cvcInvalidLength = false;
      this.cvcInvalid = false;
    }
  }
}
