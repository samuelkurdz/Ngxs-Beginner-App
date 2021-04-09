import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {NgxsModule} from '@ngxs/store';
import { SharedModule } from '../shared/shared.module';

import { BookListComponent } from './book-list/book-list.component';
import {BookshopState} from './bookshop-store/bookshop.state';

const routes: Routes = [
  {
    path: '', component: BookListComponent
  }
];

@NgModule({
  declarations: [BookListComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    NgxsModule.forFeature([BookshopState])
  ],
  exports: [
    SharedModule
  ]
})
export class BookshopModule { }
