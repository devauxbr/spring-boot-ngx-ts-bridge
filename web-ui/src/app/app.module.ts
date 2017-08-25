import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  AngularHttpClient,
  AngularUserResourceClient
} from '../../target/ts-generated-sources/spring-boot-ngx-ts-bridge-server/src/spring-boot-ngx-ts-bridge-server';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AngularHttpClient,
    AngularUserResourceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
