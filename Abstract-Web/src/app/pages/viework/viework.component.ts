import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DatabaseService} from 'src/app/services/database.service';
import {Work} from 'src/app/work';

@Component({
  selector: 'app-viework',
  templateUrl: './viework.component.html',
  styleUrls: ['./viework.component.css']
})
export class VieworkComponent implements OnInit {

  currentWorkIndex;
  currentWork:Work;

  constructor(public router: Router,private route: ActivatedRoute,public db: DatabaseService) { }

  ngOnInit() {
    this.db.getWorkMetaData().subscribe((val) => {
      this.db.worksList = val;
    })
    this.route.queryParams.subscribe(params => {
      this.currentWorkIndex = +params['fromHome'];
    });

    this.currentWork=new Work(this.db.worksList[this.currentWorkIndex].title,this.db.worksList[this.currentWorkIndex].content,
      this.db.worksList[this.currentWorkIndex].images);

  }

}
