import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingService } from './services/routing.service';
import { FormsModule, FormGroup,FormBuilder ,Validators,ReactiveFormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BarComponent } from './pages/bar/bar.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { InfoComponent } from './pages/info/info.component';
import { UploadWorkComponent } from './pages/upload-work/upload-work.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarComponent,
    ContactUsComponent,
    InfoComponent,
    UploadWorkComponent
  ],
  imports: [
    BrowserModule,
    RoutingService,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
