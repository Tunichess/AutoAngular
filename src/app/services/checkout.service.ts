import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  API:string = environment.API + "/Prod/Order";
  constructor(private http:HttpClient) { }


  checkout(data:any){
     console.log(data);
   return  this.http.post(this.API,data);
  }

  mail(mail:any){
    const data ={EMAIL:mail}
    return this.http.post("https://oxfordperformanceautos.us11.list-manage.com/subscribe/post?u=23544548f7d9cb2da10795bfb&amp;id=e3ec60913e",data);
  }


}
