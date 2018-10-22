import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import {DatabaseService} from 'src/app/services/database.service';
import {Work} from 'src/app/work';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router, public db: DatabaseService) 
  { }

  ngOnInit() {

    this.db.getWorkMetaData().subscribe((val) => {
      this.db.worksList = val;
      // for (var i=0; i<this.db.worksList.length;i++)
      // console.log( this.db.worksList[i].images);
    })
}

  public upload(){
    this.router.navigate(['upload']);
  }

  public viewWork(){
    console.log("dkjdkdjkdj");
    this.router.navigate(['viework']);
  }
}
