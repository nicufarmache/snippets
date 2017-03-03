import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn: Boolean;
  showAccount: Boolean;
  userDisplayName: string;
  userPhotoURL: string;

  items: FirebaseListObservable<any[]>;
  
  constructor(public af: AngularFire, private router: Router) {
    af.auth.subscribe(auth => {
      if (!auth){
        this.loggedIn = false;
        this.showAccount = true;
        return;
      }

      this.loggedIn = true;
      this.userDisplayName = auth.auth.displayName;
      this.userPhotoURL = auth.auth.photoURL
      this.showAccount = true;
      this.router.navigate(['/list']);
    });
  }  
  login() {
    this.af.auth.login();
  }
  logout() {
     this.af.auth.logout();
  }

}
