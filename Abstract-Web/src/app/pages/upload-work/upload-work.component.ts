import { Component, OnInit } from '@angular/core';
import {DatabaseService} from 'src/app/services/database.service';
import {UploadFileService} from 'src/app/services/upload-file.service';
import {Work} from 'src/app/work';
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
  progress: { percentage: number } = { percentage: 0 };
  fields;
  file_work_selected = false;
  work: Work;
  workform: FormGroup; // tracks the value and validity state of a group of FormControl

  constructor(public uploadService: UploadFileService, public db: DatabaseService)
   { }

  ngOnInit() {
    this.work = new Work();

  }

  public addWork(){
    this.db.addWorkToDB(this.work)
  }

    //Holds the selected file from the form
    selectFile(event) {
      this.selectedFiles = event.target.files;
      if (this.work.title == undefined || this.work.title == '') {
        this.cancelSelectFile();
        alert("חובה להזין שם")
        return;
      }
      if (this.selectedFiles.item(0).size > 5242880) {
        this.cancelSelectFile();
        alert("גודל הקובץ חייב להיות עד 5 מגה בייט")
        return;
      }
      this.file_work_selected = true;
    }
    cancelSelectFile() {
      this.selectedFiles = null;
      this.file_work_selected = false;
    }
  
      //Uploads the selected file to firebase storage
  upload() {
    this.uploadService.basePath = this.work.title;
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;
    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress).then(() => {
      this.work.images.push(this.currentFileUpload)
      this.file_work_selected = false;
      this.addWork();
    });
  }




}







