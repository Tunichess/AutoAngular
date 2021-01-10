import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewcartComponent } from './components/viewcart/viewcart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductComponent } from './components/product/product.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { TyreSearchComponent } from './components/tyre-search/tyre-search.component';
import { HomeComponent } from './components/home/home.component';
import { RemappingComponent } from './components/remapping/remapping.component';
import { VehicleWrappingComponent } from './components/vehicle-wrapping/vehicle-wrapping.component';
import { ValetingComponent } from './components/valeting/valeting.component';
import { EngineCleaningComponent } from './components/engine-cleaning/engine-cleaning.component';
import { PropertyTintsComponent } from './components/property-tints/property-tints.component';
import { KeyDiscountComponent } from './components/key-discount/key-discount.component';
import { AutomotiveTintsComponent } from './components/automotive-tints/automotive-tints.component';
import { RepairRefubishmentComponent } from './components/repair-refubishment/repair-refubishment.component';
import { WheelExchangeComponent } from './components/wheel-exchange/wheel-exchange.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
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


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
},
{
  path: 'blog',
  component: BlogComponent ,
},
{
  path: 'back_window_tint',
  component: Back_window_tintComponent ,
},
{
  path: 'trade_window_tinting',
  component:TradewindowtintingComponent ,
},
{
  path: 'trade_wheel_refurbishment',
  component:TradewheelrefurbishmentComponent ,
},
{
  path: 'window-tinting-FAQ',
  component: WindowtintingFAQComponent ,
},
{
  path: 'wheel-refurbishment-FAQ',
  component: WheelrefurbishmentFAQComponent ,
},
{
  path: '4_advantages_of_ECU_remapping',
  component: Advantages_of_ECU_remappingComponent ,
},
{
  path: 'diamond_cut_alloy_Wheels',
  component: Diamond_cut_alloy_WheelsComponent ,
},
{
  path: 'know_your_fitment_to_choose_custom_wheels',
  component: Know_your_fitment_to_choose_custom_wheelsComponent ,
},
{
  path: 'our_top_wheel_size_guide',
  component: Our_top_wheel_size_guideComponent ,
},
{
  path: 'the_advantages_to_tinting_your_windows',
  component: The_advantages_to_tinting_your_windowsComponent ,
},
{
  path: 'top_tips_to_choosing_alloy_wheels',
  component: Top_tips_to_choosing_alloy_wheelsComponent ,
},
{
  path: 'Alloy-Wheels-Land-Rover-Discovery-5-Commercial',
  component: AlloyWheelsLandRoverDiscovery5CommercialComponent ,
},
{
  path: 'wheel_size_and_driving_goals_guide',
  component: Wheel_size_and_driving_goals_guideComponent ,
},
{
  path: 'gallery',
  component: GalleryComponent,
},
{
  path: 'contact-us',
  component: ContactComponent,
},
{
  path: 'wheel-part-exchange',
  component: WheelExchangeComponent,
},

{
  path: 'repair-refurbishment',
  component: RepairRefubishmentComponent,
},
{
  path: 'automotive-tints',
  component: AutomotiveTintsComponent,
},
{
  path: 'key-discount',
  component: KeyDiscountComponent,
},
{
  path: 'property-tints',
  component: PropertyTintsComponent,
},
{
  path: 'engine-carbon-cleaning',
  component: EngineCleaningComponent,
},
{
  path: 'remapping',
  component: RemappingComponent,
},
{
  path: 'vehicle-wrap',
  component: VehicleWrappingComponent,
},
{
  path: 'valeting',
  component: ValetingComponent,
},

  {
    path: 'tyresearch',
    component: TyreSearchComponent,
},
{
  path: 'cart',
  component: ViewcartComponent,
},
{
  path: 'checkout',
  component: CheckoutComponent,
},
{
  path: 'product/:id',
  component: ProductComponent,
},
{
  path:'confirmation/:id',
  component:OrderConfirmationComponent
},
{
  path:'terms-and-conditions',
  component:TermsComponent
},
 { path: '', redirectTo: '', pathMatch: 'full' },
// otherwise redirect to home
{ path: '**', redirectTo: '' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
