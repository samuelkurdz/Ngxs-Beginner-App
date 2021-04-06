import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { BookListComponent } from './book-list/book-list.component';

const routes: Routes = [
  {
    path: '', component: BookListComponent
  }
];

@NgModule({
  declarations: [BookListComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    SharedModule
  ]
})
export class BookshopModule { }
