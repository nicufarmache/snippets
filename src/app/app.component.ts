import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn = false;
  showAccount = false;
  userDisplayName = "";
  userPhotoURL = "";
  uid = null;

  items: FirebaseListObservable<any[]>;
  
  constructor(public af: AngularFire) {
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
      this.uid = auth.uid;
      this.items = af.database.list('/users/' + this.uid);
    });
  }  
  login() {
    this.af.auth.login();
  }
  logout() {
     this.af.auth.logout();
  }

  newSnippet() {
    this.items.push({name:"test", description:"alalalala"});
  }
}
