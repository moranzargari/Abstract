import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingService } from '../services/routing.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BarComponent } from './pages/bar/bar.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    RoutingService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
