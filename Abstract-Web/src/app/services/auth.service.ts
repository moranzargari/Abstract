import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: firebase.User = null; //a variable that hold the current loggeed in user data.
  emailError = false;//this variable handle errors.

  constructor(private router: Router, private _firebaseAuth: AngularFireAuth) {
  }

  signIn(email, password) //this method allow to an registered user to login.
  {
    const credential = firebase.auth.EmailAuthProvider.credential(email, password);
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
  }

  emailSignUp(email: string, password: string) //this method allows user to signup to the web-app with provided email and password.
  {
    return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  resetPassword(email: string) //this method allow an registered user to reset his password
  {
    const fbAuth = firebase.auth();
    return fbAuth.sendPasswordResetEmail(email)//this line send email to the user email address.
      .catch(error => {
        if (error.code == 'auth/user-not-found') { // in case that email not found in firebase server.
          this.emailError = true
        }
        else
          this.emailError = true //email valitation.
      })
  }


  LogOut() //this method allow a register user to logout from the website.
  {
    this._firebaseAuth.auth.signOut()
      .then((res) => {
        this.router.navigate(['works'])
      })
      .catch((err) =>
        console.log(err + "")
      );
  }
}
