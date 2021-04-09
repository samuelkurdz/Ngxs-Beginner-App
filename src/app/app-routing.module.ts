import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './core/guards/auth.guard';

import {LoginComponent} from './app-sub-components/login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./bookshop/bookshop.module').then(m => m.BookshopModule),
  },
  { path: 'auth', component: LoginComponent },
  {
    path: 'cart',
    loadChildren: () => import('./cart-checkout/cart-checkout.module').then(m => m.CartCheckoutModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
