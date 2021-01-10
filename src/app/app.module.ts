import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FiltersExampleDialog, TyreSearchComponent } from './components/tyre-search/tyre-search.component';
import { ViewcartComponent } from './components/viewcart/viewcart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { StepsComponent } from './components/steps/steps.component';
import { HomeComponent } from './components/home/home.component';
import { RemappingComponent } from './components/remapping/remapping.component';
import { VehicleWrappingComponent } from './components/vehicle-wrapping/vehicle-wrapping.component';
import { ValetingComponent } from './components/valeting/valeting.component';
import { BannerComponent } from './components/banner/banner.component';
import { EngineCleaningComponent } from './components/engine-cleaning/engine-cleaning.component';
import { PropertyTintsComponent } from './components/property-tints/property-tints.component';
import { KeyDiscountComponent } from './components/key-discount/key-discount.component';
import { AutomotiveTintsComponent } from './components/automotive-tints/automotive-tints.component';
import { RepairRefubishmentComponent } from './components/repair-refubishment/repair-refubishment.component';
import { WheelExchangeComponent } from './components/wheel-exchange/wheel-exchange.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent, DialogViewImage } from './components/gallery/gallery.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import {MatDialogModule} from '@angular/material/dialog';
import { ContactBannerComponent } from './components/contact-banner/contact-banner.component';
import { TyresearchService } from './services/tyresearch.service';
import { HttpClientModule,HttpClientJsonpModule  } from '@angular/common/http';
import { CartService } from './services/cart.service';
import { ToastrModule } from 'ngx-toastr';
import { DecimalPipe } from '@angular/common';
import { TermsComponent } from './components/terms/terms.component';
import { BlogComponent } from './components/blog/blog.component';

import { AlloyWheelsLandRoverDiscovery5CommercialComponent } from './components/Alloy-Wheels-Land-Rover-Discovery-5-Commercial/Alloy-Wheels-Land-Rover-Discovery-5-Commercial.component';
import { Back_window_tintComponent } from './components/back_window_tint/back_window_tint';
import { Advantages_of_ECU_remappingComponent } from './components/4_advantages_of_ECU_remapping/4_advantages_of_ECU_remapping';
import { Diamond_cut_alloy_WheelsComponent } from './components/diamond_cut_alloy_Wheels/diamond_cut_alloy_Wheels';
import { Know_your_fitment_to_choose_custom_wheelsComponent } from './components/Know_your_fitment_to_choose_custom_wheels/Know_your_fitment_to_choose_custom_wheels';
import { Our_top_wheel_size_guideComponent } from './components/our_top_wheel_size_guide/our_top_wheel_size_guide';
import { The_advantages_to_tinting_your_windowsComponent } from './components/the_advantages_to_tinting_your_windows/the_advantages_to_tinting_your_windows';
import { Top_tips_to_choosing_alloy_wheelsComponent } from './components/top_tips_to_choosing_alloy_wheels/top_tips_to_choosing_alloy_wheels';
import { Wheel_size_and_driving_goals_guideComponent } from './components/wheel_size_and_driving_goals_guide/wheel_size_and_driving_goals_guide';
import { WheelrefurbishmentFAQComponent } from './components/wheel-refurbishment-FAQ/wheel-refurbishment-FAQ';
import { WindowtintingFAQComponent } from './components/window-tinting-FAQ/window-tinting-FAQ';
import { TradewheelrefurbishmentComponent } from './components/trade_wheel_refurbishment/trade_wheel_refurbishment';
import { TradewindowtintingComponent } from './components/trade_window_tinting/trade_window_tinting';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TyreSearchComponent,
    ViewcartComponent,
    CheckoutComponent,
    FooterComponent,
    ProductComponent,
    OrderConfirmationComponent,
    StepsComponent,
    HomeComponent,
    RemappingComponent,
    VehicleWrappingComponent,
    ValetingComponent,
    BannerComponent,
    EngineCleaningComponent,
    PropertyTintsComponent,
    KeyDiscountComponent,
    AutomotiveTintsComponent,
    RepairRefubishmentComponent,
    WheelExchangeComponent,
    ContactComponent,
    GalleryComponent,
    DialogViewImage,
    FiltersExampleDialog,
    ContactBannerComponent,
    TermsComponent,
    BlogComponent,
    AlloyWheelsLandRoverDiscovery5CommercialComponent,

    Advantages_of_ECU_remappingComponent,
    Back_window_tintComponent,
    Diamond_cut_alloy_WheelsComponent,
    Know_your_fitment_to_choose_custom_wheelsComponent,
    Our_top_wheel_size_guideComponent,
    The_advantages_to_tinting_your_windowsComponent,
    Top_tips_to_choosing_alloy_wheelsComponent,
    Wheel_size_and_driving_goals_guideComponent,
    WheelrefurbishmentFAQComponent,
    WindowtintingFAQComponent,
    TradewheelrefurbishmentComponent,
    TradewindowtintingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    HttpClientJsonpModule,      
    ReactiveFormsModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [TyresearchService,CartService,DecimalPipe],
  bootstrap: [AppComponent],
  entryComponents:[DialogViewImage,FiltersExampleDialog]
})
export class AppModule { }
