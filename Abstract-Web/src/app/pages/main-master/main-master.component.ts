import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-main-master',
  templateUrl: './main-master.component.html',
  styleUrls: ['./main-master.component.css']
})
export class MainMasterComponent implements OnInit {

  type;

  constructor(public router: Router, private cookieService: CookieService) { }

  ngOnInit() {
    this.type = this.cookieService.get('UserType');
    if (this.type !='mastery')
    {
      this.router.navigate(['works']);
    }
  }

  public msg(){
    this.router.navigate(['messages']);
  }

  public upload(){
    this.router.navigate(['upload']);
  }

  public edit(){
    this.router.navigate(['edit']);
  }
}
