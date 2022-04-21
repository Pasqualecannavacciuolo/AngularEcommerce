import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductDetailsComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


@Injectable({
  providedIn: 'root',
})

export class SharedService {
  constructor() {}

  subject = new Subject<any>();

  emitData(payload: any) {
    this.subject.next(payload);
  }
}