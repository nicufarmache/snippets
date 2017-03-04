import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  templateUrl: './snippet-list.component.html',
  styleUrls: ['./snippet-list.component.css']
})
export class SnippetListComponent {
  items: FirebaseListObservable<any[]>;
  uid: null;
  
  constructor(public af: AngularFire, private router: Router) {
    af.auth.subscribe(auth => {
      if (!auth){
        //this.router.navigate(['/']);
        return;
      }
      this.items = af.database.list('/users/' + auth.uid);
    });
  }

  remove(key: string){
    this.items.remove(key);
  }  
}
