import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RateusComponent } from './rateus/rateus.component';
import { ShopComponent } from './shop/shop.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'chat', component:ChatComponent },
  {path: 'support', component: SupportComponent},
  {path: 'rateus', component: RateusComponent },
  {path: 'login', component: LoginComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
