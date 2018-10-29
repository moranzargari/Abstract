import { Component, OnInit } from '@angular/core';
import {DatabaseService} from 'src/app/services/database.service';
import { Work } from '../../work';
import {UploadFileService} from 'src/app/services/upload-file.service';
import { FileUpload } from '../../file-upload';
import { RouterLink, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-edit-work',
  templateUrl: './edit-work.component.html',
  styleUrls: ['./edit-work.component.css']
})
export class EditWorkComponent implements OnInit {

  selectedWork = 'מתוך רשימה';
  works=['מתוך רשימה']
  work: Work

  pdf = 0 ;
  imges = 0 ;
  moreimages=0;
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  progress: { percentage: number } = { percentage: 0 };
  progress2: { percentage: number } = { percentage: 0 };
  fields;
  type;
  file_work_selected = false;
  counter=1;
  arr= [1];

  constructor(public db: DatabaseService, public uploadService: UploadFileService, public router: Router, private cookieService: CookieService) { }

  
  ngOnInit() {
    this.type = this.cookieService.get('UserType');
    if (this.type !='mastery')
    {
      this.router.navigate(['works']);
    }

    this.db.getWorkMetaData().subscribe((val) => {
      this.db.worksList = val;
      var j = 1;
      for (var i = 0; i < this.db.worksList.length; i++) {
          this.work = this.db.worksList[i];
          this.works[j++] = this.work.title;
      }
    })
  }

  flagmoreimages(){
    if (this.moreimages ==0)
      this.moreimages ++;
    else
      this.moreimages--;
  }
  
  flagimages(){
    if (this.imges ==0)
      this.imges ++;
    else
      this.imges--;
  }

  flagpdf(){
    if (this.pdf ==0)
      this.pdf ++;
    else
      this.pdf--;
  }
  onChangeObj() {
    for (var i = 0; i < this.db.worksList.length; i++) {
      if (this.selectedWork == this.db.worksList[i].title) {
          this.work = this.db.worksList[i]
      }
    }
  }

  swapic(i){
    if (window.confirm('האם להגדיר כתמונה ראשית לעבודה זו?')){
      var temp = this.work.images[i];
      this.work.images[i] = this.work.images[0];
      this.work.images[0] = temp;
    }
  }

  swapup(i){
    var temp = this.work.images[i];
    this.work.images[i] = this.work.images[i-1];
    this.work.images[i-1] = temp;
  }
  swapdown(i){
    var temp = this.work.images[i];
    this.work.images[i] = this.work.images[i+1];
    this.work.images[i+1] = temp;
  }


  edit(){
    this.db.work = this.work;
    this.db.updateWorkListing(this.work.title);
    alert("המידע עודכן בהצלחה")
    this.router.navigate(['mainMaster']);
  }

  deletimg(i){
    if (window.confirm('האם למחוק את התמונה?'))
      this.work.images.splice(i, 1);
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
      this.arr.push(1);
    }

    deleteWork(){
      if (window.confirm('האם אתה בטוח שברצונך למחוק עבודה זו לצמיתות?')){
        this.db.deleteWorkListing(this.work.title)
        alert("העבודה נמחקה בהצלחה");
        this.router.navigate(['mainMaster']);
      }
    }
}
