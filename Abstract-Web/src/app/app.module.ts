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
import {DatabaseService} from './services/database.service';
import {UploadFileService} from './services/upload-file.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { VieworkComponent } from './pages/viework/viework.component';
import { MasteryComponent } from './pages/mastery/mastery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarComponent,
    ContactUsComponent,
    InfoComponent,
    UploadWorkComponent,
    VieworkComponent,
    MasteryComponent
  ],
  imports: [
    BrowserModule,
    RoutingService,
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFirestoreModule, 
    ReactiveFormsModule,
    AngularFirestoreModule.enablePersistence()

  ],
  providers: [
    DatabaseService,
    UploadFileService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
