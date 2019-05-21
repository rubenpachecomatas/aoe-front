import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  password;
  email;
  newPassword;
  name;
  error = 0;

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  changePass(email, password, newPassword) {
    this.error = 1;
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((success) => {
        const user = this.afAuth.auth.currentUser;
        console.log(newPassword);
        user.updatePassword(newPassword)
        .catch(error => {
          this.error = 2;
        });
      }).catch(error => {
          this.error = 2;
      });
  }

  changeName(name) {
    this.error = 3;
    const user = this.afAuth.auth.currentUser;
    user.updateProfile({
      displayName: name
    }).catch(error => {
      this.error = 4;
    })
  }

}
