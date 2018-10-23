import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { ContactUsComponent } from '../pages/contact-us/contact-us.component';
import {InfoComponent} from '../pages/info/info.component'
import {UploadWorkComponent} from '../pages/upload-work/upload-work.component'
import {VieworkComponent} from '../pages/viework/viework.component';
import { MasteryComponent } from '../pages/mastery/mastery.component';
import {MainMasterComponent} from '../pages/main-master/main-master.component';
import {MessagesComponent} from '../pages/messages/messages.component';

//routing links to navigate through the web-app
const appRouets: Routes = [
  { path: '', redirectTo: '/works', pathMatch: 'full' },
  { path: 'works', component: HomeComponent },
  { path: 'contactUs', component: ContactUsComponent},
  { path: 'info', component: InfoComponent},
  { path: 'viework', component: VieworkComponent},
  { path: 'upload', component: UploadWorkComponent},
  { path: 'mainMaster', component: MainMasterComponent},
  { path: 'messages', component: MessagesComponent},
  {path: 'mastery', component: MasteryComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(appRouets)],
  exports: [RouterModule]
})

export class RoutingService {
}
