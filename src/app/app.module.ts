import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import {MatMenuModule} from '@angular/material/menu';
import { TopComponent } from './top/top.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ChatComponent } from './chat/chat.component';
import { SupportComponent } from './support/support.component';
import { RateusComponent } from './rateus/rateus.component';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    TopComponent,
    GalleryComponent,
    ChatComponent,
    SupportComponent,
    RateusComponent,
    ShopComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
