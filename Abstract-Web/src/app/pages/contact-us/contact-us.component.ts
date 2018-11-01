import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Msg} from 'src/app/msg';
import {DatabaseService} from 'src/app/services/database.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  form: FormGroup;
  newMsg: Msg;
  date: Date = new Date();
  today;

  constructor(private fb: FormBuilder,public db: DatabaseService) {this.createForm(); }

  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
      subject: ['', Validators.required],
    });
  }

  onSubmit() {
    const {name, email, message,subject} = this.form.value;
    const date = Date();
    let formRequest = { name, email, message, date,subject};
    this.today = this.date.getDate().toString() + "/" + (this.date.getMonth() + 1).toString() + "/" + this.date.getFullYear().toString();
    this.newMsg = new Msg(subject,message, this.today,email,name);
    this.newMsg.name = formRequest.name;
    this.newMsg.subj = formRequest.subject;
    this.newMsg.message = formRequest.message;
    this.newMsg.email = formRequest.email;
    this.newMsg.date =  this.today;
    this.db.addMsgToDB(this.newMsg);
    this.form.reset();
  }
}

