import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState = null;
  error = 0;
  message;

  constructor(public afAuth: AngularFireAuth, private router: Router) {

    // Keep the session active.

    this.afAuth.authState.subscribe(res => {
      this.authState = res;
    });
  }

  // Check if someone is logged.

  checkUser() {
    if (this.afAuth.auth.currentUser) {
      return true;
    }
    return false;
  }

  // Log Out

  logout() {
    this.afAuth.auth.signOut();
  }

  // Log In

  login(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((success) => {
        this.router.navigate([`/home`]);
      }).catch((error) =>  {
        this.error = 1;
        this.message = error.message;
        console.log(error);
      });
  }

  // Sign In

  signin(email, password) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
     .then((success) => {
       const name = email.substring(0, email.lastIndexOf('@'));
       console.log(name);
       this.afAuth.auth.currentUser.updateProfile({
         displayName: name
       });
       console.log(this.afAuth.auth.currentUser.displayName);
       this.router.navigate([`/home`]);
     }).catch((error) =>  {
      this.error = 2;
      this.message = error.message;
      console.log(error);
    });
  }

  // Res Password

  resPassword(emailR) {
    this.error = 4;
    this.afAuth.auth.sendPasswordResetEmail(emailR).then(function() {
      // Email sent.
    }).catch(error => {
      this.error = 3;
      this.message = error.message;
    });
  }

}