import { NgModule } from '@angular/core';

import {CoreModule} from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './app-sub-components/top-bar/top-bar.component';
import { LoginComponent } from './app-sub-components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LoginComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
