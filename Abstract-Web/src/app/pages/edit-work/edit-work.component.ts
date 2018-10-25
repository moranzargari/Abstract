import { Component, OnInit } from '@angular/core';
import {DatabaseService} from 'src/app/services/database.service';
import { Work } from '../../work';
import {UploadFileService} from 'src/app/services/upload-file.service';
import { FileUpload } from '../../file-upload';
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
  fields;
  type;
  file_work_selected = false;


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
  }

  deletimg(i){
    if (window.confirm('האם למחוק את התמונה?'))
      this.work.images.splice(i, 1);
  }

  addmore(){

  }

}
