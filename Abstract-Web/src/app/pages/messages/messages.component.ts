import { Component, OnInit } from '@angular/core';
import {DatabaseService} from 'src/app/services/database.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public db: DatabaseService) { }

  ngOnInit() {
    this.db.getMsgMetaData().subscribe((val) => {
      this.db.MsgsList = val;
    })

  }

}
