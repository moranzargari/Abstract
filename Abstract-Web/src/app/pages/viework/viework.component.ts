import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DatabaseService} from 'src/app/services/database.service';
import {Work} from 'src/app/work';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-viework',
  templateUrl: './viework.component.html',
  styleUrls: ['./viework.component.css']
})
export class VieworkComponent implements OnInit {

  currentWorkIndex;
  currentWork:Work;

  constructor(public router: Router,private route: ActivatedRoute,public db: DatabaseService,private cookieService: CookieService) {
    //this.cookieService.set('fromHome',  this.currentWorkIndex);
  }

  ngOnInit() {
    //this.currentWorkIndex = this.cookieService.get('fromHome');
    this.db.getWorkMetaData().subscribe((val) => {
      this.currentWorkIndex = this.cookieService.get('fromHome');
      this.db.worksList = val;
      this.currentWork=new Work(this.db.worksList[this.currentWorkIndex].title,this.db.worksList[this.currentWorkIndex].content,
      this.db.worksList[this.currentWorkIndex].subtitle,this.db.worksList[this.currentWorkIndex].pdf,this.db.worksList[this.currentWorkIndex].images);

    });

    console.log(  this.currentWork);
    // this.route.queryParams.subscribe(params => {
    //   this.currentWorkIndex = +params['fromHome'];
    // });

  }

}
