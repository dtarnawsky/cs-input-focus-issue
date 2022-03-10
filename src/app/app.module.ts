import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FormBuilder} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HTTP} from '@ionic-native/http/ngx';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {CurrencyPipe} from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    HttpClientModule,
    HTTP,
    InAppBrowser,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    FormBuilder,
    Title,
    CurrencyPipe,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
