import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxsModule} from '@ngxs/store';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {environment} from '../../environments/environment';
import {UserState} from '../store/auth/auth.state';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';



@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([UserState], { developmentMode: !environment.production }),
    NgxsLoggerPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({
      key: ['auth']
    })
  ],
  exports: [
    BrowserModule,
  ]
})
export class CoreModule { }
