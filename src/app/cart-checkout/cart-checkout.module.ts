import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {NgxsModule} from '@ngxs/store';
import {RouterModule, Routes} from '@angular/router';

import { CartComponent } from './cart/cart.component';
import {CartState} from './cart-store/cart-store.state';


const routes: Routes = [
  {
    path: '', component: CartComponent
  }
];

@NgModule({
  declarations: [CartComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    NgxsModule.forFeature([CartState])
  ]
})
export class CartCheckoutModule { }
