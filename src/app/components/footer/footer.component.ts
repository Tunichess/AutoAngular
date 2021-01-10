import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout.service';
// import {Jsonp} from '@angular/http';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  mail:any = ''
  url = 'https://oxfordperformanceautos.us11.list-manage.com/subscribe/post?u=23544548f7d9cb2da10795bfb&amp;id=e3ec60913e';
  constructor(private checkoutService:CheckoutService, private http:HttpClient) { }

  ngOnInit() {
  

    
  }



  subscribe(){
    var url = this.url + '&EMAIL=' +this.mail;
   window.open(url);
  }

}
