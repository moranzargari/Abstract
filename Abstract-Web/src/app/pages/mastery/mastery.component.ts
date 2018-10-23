import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service'
import { FormsModule, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';


type UserFields = 'email' | 'password';
type FormErrors = { [u in UserFields]: string };

@Component({
  selector: 'app-mastery',
  templateUrl: './mastery.component.html',
  styleUrls: ['./mastery.component.css']
})
export class MasteryComponent implements OnInit {

  logInError = false;
  userForm: FormGroup;
  formErrors: FormErrors = {
    'email': '',
    'password': '',
  };
  signInVal = 'כניסה'
  constructor(public auth: AuthService, public fb: FormBuilder, public router: Router, private cookieService: CookieService) { }

  ngOnInit() {
    this.buildForm();
  }



  signIn() { //enables the sign in button function
    this.signInVal = 'מתחבר...'
    this.auth.signIn(this.userForm.value['email'], this.userForm.value['password']) //using the auth service
      .then((res) => {
        this.cookieService.set('UserType', 'mastery');
            this.router.navigate(['mainMaster'])
      })
      .catch((err) => {
        this.signInVal = 'כניסה'
        this.logInError = true
        alert("שם או סיסמה לא נכונים")
      }
      );
  }


  buildForm() { //form validation function - validates user input
    this.userForm = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.email,
      ]],
      'password': ['', [
        Validators.minLength(6),
        Validators.maxLength(25),
      ]],
    });
  }
}
