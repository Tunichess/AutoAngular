import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
topExp:number = 35;
  constructor() { }

  ngOnInit() {
  }

  @HostListener("window:scroll", ['$event'])
  doSomethingOnInternalScroll(event:any){
    
    if(window.outerWidth>992){
      if(window.pageYOffset<35){
      
        this.topExp = 35  -window.pageYOffset;
        
      }else{
        this.topExp = 0;
      }
      
    }
    
  }

  @HostListener("window:resize", ['$event'])
  resize(event:any){
    
    if(window.outerWidth>992){
      if(window.pageYOffset<35){
      
        this.topExp = 35  -window.pageYOffset;
        
      }else{
        this.topExp = 0;
      }
      
    }
    
  }



  setTop(){
    if(window.outerWidth<992){

      return {
        'top': 0 + 'px',
      };
    }else{
      return {
        'top': this.topExp + 'px',
      };
    }
    
  
  }



}
