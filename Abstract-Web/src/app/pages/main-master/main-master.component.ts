import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-main-master',
  templateUrl: './main-master.component.html',
  styleUrls: ['./main-master.component.css']
})
export class MainMasterComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  public msg(){
    this.router.navigate(['messages']);
  }

  public upload(){
    this.router.navigate(['upload']);
  }

  // public edit(){
  //   this.router.navigate(['upload']);
  // }

}
