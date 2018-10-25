import { Component, OnInit } from '@angular/core';
import {DatabaseService} from 'src/app/services/database.service';
import { Work } from '../../work';

@Component({
  selector: 'app-edit-work',
  templateUrl: './edit-work.component.html',
  styleUrls: ['./edit-work.component.css']
})
export class EditWorkComponent implements OnInit {

  selectedWork = 'מתוך רשימה';
  works=['מתוך רשימה']
  work: Work

  constructor(public db: DatabaseService) { }

  
  ngOnInit() {
    this.db.getWorkMetaData().subscribe((val) => {
      this.db.worksList = val;
      var j = 1;
      for (var i = 0; i < this.db.worksList.length; i++) {
          this.work = this.db.worksList[i];
          this.works[j++] = this.work.title;
      }
    })
  }

  onChangeObj() {
    for (var i = 0; i < this.db.worksList.length; i++) {
      if (this.selectedWork == this.db.worksList[i].title) {
          this.work = this.db.worksList[i]
      }
    }
  }

}
