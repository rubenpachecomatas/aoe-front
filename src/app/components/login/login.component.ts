import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email;
  emailR;
  password;
  error = 0;
  message;

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

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

  resPassword(emailR) {
    this.error = 4;
    this.afAuth.auth.sendPasswordResetEmail(emailR).then(function() {
      // Email sent.
    }).catch(error => {
      this.error = 3;
      this.message = error.message;
    });
  }

  ngOnInit() {
  }

}
