import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState = null;

  constructor(public afAuth: AngularFireAuth) {

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
}