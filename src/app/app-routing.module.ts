import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './core/guards/auth.guard';

import {LoginComponent} from './app-sub-components/login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./bookshop/bookshop.module').then(m => m.BookshopModule),
    canActivate: [AuthGuard]
  },
  { path: 'auth', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
