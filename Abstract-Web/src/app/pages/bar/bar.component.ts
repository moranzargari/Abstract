import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

   constructor(public router: Router) { }

  ngOnInit() {
  }

  
  public contactUs(){
     this.router.navigate(['contactUs']);
  }
  public info(){
    this.router.navigate(['info']);
 }
}
