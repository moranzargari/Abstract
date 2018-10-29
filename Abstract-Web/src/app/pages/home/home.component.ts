import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import {DatabaseService} from 'src/app/services/database.service';
import {Work} from 'src/app/work';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

type;
flag=0;

  constructor(public router: Router, public db: DatabaseService,private cookieService: CookieService) 
  { }

  ngOnInit() {
    this.type = this.cookieService.get('UserType');
    this.db.getWorkMetaData().subscribe((val) => {
      this.db.worksList = val;
      this.db.worksList.sort(function(a, b) {
        return parseFloat(a.workNum) - parseFloat(b.workNum);
    });
    this.flag=1;
    })
}

  public viewWork(index){
   this.router.navigate(['viework'], { queryParams: { fromHome: index} });
  }
}
