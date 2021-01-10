import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss']
})
export class OrderConfirmationComponent implements OnInit {
order = '';
  constructor(private activatedRoute:ActivatedRoute,private cartService:CartService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((data:any)=>{
      this.order = data.id;
      this.cartService.empty();
    })
  }

}
