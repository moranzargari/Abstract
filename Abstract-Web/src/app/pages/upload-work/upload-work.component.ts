import { Component, OnInit } from '@angular/core';
import {DatabaseService} from 'src/app/services/database.service'
import {UploadFileService} from 'src/app/services/upload-file.service'
import {Work} from 'src/app/work'
import { RouterLink, Router } from '@angular/router';
import { FormsModule, FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { FileUpload } from '../../file-upload';

@Component({
  selector: 'app-upload-work',
  templateUrl: './upload-work.component.html',
  styleUrls: ['./upload-work.component.css']
})
export class UploadWorkComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  work: Work;
  workform: FormGroup; // tracks the value and validity state of a group of FormControl

  constructor() { }

  ngOnInit() {
  }

}
