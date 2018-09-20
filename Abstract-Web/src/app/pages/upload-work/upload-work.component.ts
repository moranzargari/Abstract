import { Component, OnInit } from '@angular/core';
import {DatabaseService} from 'src/app/services/database.service'
import {UploadFileService} from 'src/app/services/upload-file.service'
import {Work} from 'src/app/work'

@Component({
  selector: 'app-upload-work',
  templateUrl: './upload-work.component.html',
  styleUrls: ['./upload-work.component.css']
})
export class UploadWorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
