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

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  login(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((success) => {
        this.router.navigate([`/home`]);
      }).catch((error) =>  {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }

  signin(email, password) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
     .then((success) => {
        this.router.navigate([`/home`]);
     });
  }

  resPassword(emailR) {
    this.afAuth.auth.sendPasswordResetEmail(emailR).then(function() {
      // Email sent.
    }).catch(function(error) {
      // An error happened.
    });
  }

  ngOnInit() {
  }

}
