import { Component, OnInit } from '@angular/core';
import {DatabaseService} from 'src/app/services/database.service';
import {UploadFileService} from 'src/app/services/upload-file.service';
import {Work} from 'src/app/work';
import { RouterLink, Router } from '@angular/router';
import { FormsModule, FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { FileUpload } from '../../file-upload';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-upload-work',
  templateUrl: './upload-work.component.html',
  styleUrls: ['./upload-work.component.css']
})
export class UploadWorkComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  progress: { percentage: number } = { percentage: 0 };
  progress2: { percentage: number } = { percentage: 0 };
  txtupload = "העלאת תמונה ראשית";
  fields;
  counter=1;
  arr= [1];
  type;
  file_work_selected = false;

  work: Work;
  workform: FormGroup; // tracks the value and validity state of a group of FormControl

  constructor(public uploadService: UploadFileService, public db: DatabaseService, public router: Router, private cookieService: CookieService)
   { }

  ngOnInit() {
    this.type = this.cookieService.get('UserType');
    if (this.type !='mastery')
    {
      this.router.navigate(['works']);
    }

    this.work = new Work();
  }

  public addWork(){
        this.db.addWorkToDB(this.work)
    this.file_work_selected = false;
    alert("הועלה בהצלחה")
    this.router.navigate(['mainMaster']);
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
  upload(num) {
    this.uploadService.basePath = this.work.title;
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;
    this.currentFileUpload = new FileUpload(file);
    this.file_work_selected = true;

    if(num==0){
      this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress).then(() => {
        this.file_work_selected = false;
        this.work.images.push(this.currentFileUpload); // assigned file in project field
        });
    }
    else{
      this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress2).then(() => {
        this.file_work_selected = false;
        this.work.pdf = this.currentFileUpload;
        });
    }

  }

  counterUp(){
    this.counter++;
    this.  txtupload = "העלאת תמונה נוספת";
    this.arr.push(1);
  }



}







