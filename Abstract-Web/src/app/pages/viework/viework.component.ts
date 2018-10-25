import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DatabaseService} from 'src/app/services/database.service';
import {Work} from 'src/app/work';
import * as $ from 'jquery';

@Component({
  selector: 'app-viework',
  templateUrl: './viework.component.html',
  styleUrls: ['./viework.component.css']
})
export class VieworkComponent implements OnInit {

  currentWorkIndex;
  currentWork:Work;
  str="";
  str1="";

  constructor(public router: Router,private route: ActivatedRoute,public db: DatabaseService) {}

  ngOnInit() {

    this.db.getWorkMetaData().subscribe((val) => {
      this.db.worksList = val;
      this.route.queryParams.subscribe(params => {
        this.currentWorkIndex = +params['fromHome'];
      });
  
      this.currentWork=new Work(this.db.worksList[this.currentWorkIndex].title,this.db.worksList[this.currentWorkIndex].content,
      this.db.worksList[this.currentWorkIndex].subtitle,this.db.worksList[this.currentWorkIndex].pdf,this.db.worksList[this.currentWorkIndex].images);

      this.str1+="<br><div class='well'><h2 class='text-divider'><span>"+this.currentWork.title+"</span></h2>"+
                "<p>"+this.currentWork.content+"</p>";
        if(this.currentWork.pdf!=undefined){
          this.str1+="</div><div class='fa fa-file-pdf-o' style='font-size:19px;color:red;'>"+
          "&nbsp;<a href='"+this.currentWork.pdf.url+"'>לחץ לצפייה בעבודה המלאה</a></div>";
        }    
      var i;
      for(i=0;i< this.currentWork.images.length;i++){
        this.str+="<img src='"+this.currentWork.images[i].url+"'>";
      }
      $(".container").html(this.str1);
      $(".pics").html(this.str);
    });

  }

}
