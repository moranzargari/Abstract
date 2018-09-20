import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router) 
  { }
  /*jjhkkkj*/
  ngOnInit() {
  }
  public upload(){
    this.router.navigate(['upload']);
  }
}
