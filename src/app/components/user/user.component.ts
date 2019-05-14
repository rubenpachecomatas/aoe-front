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
  error = 0;

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  changePass(email, password, newPassword) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((success) => {
        const user = this.afAuth.auth.currentUser;
        console.log(newPassword);
        user.updatePassword(newPassword);
      });
    this.error = 1;
  }

}
