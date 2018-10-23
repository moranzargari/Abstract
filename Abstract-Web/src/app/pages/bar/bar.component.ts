import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

   constructor(public auth: AuthService, public router: Router, private cookieService: CookieService) { }

   type
  ngOnInit() {
    this.type = this.cookieService.get('UserType');
  }

  
  public contactUs(){
     this.router.navigate(['contactUs']);
  }
  public info(){
    this.router.navigate(['info']);
 }
 public works(){
  this.router.navigate(['works']);
}
public upload(){
  this.router.navigate(['upload']);
}

public logOut() {
  this.cookieService.set('UserType', 'undefined');
  this.auth.LogOut();
  window.location.reload();
}
}
