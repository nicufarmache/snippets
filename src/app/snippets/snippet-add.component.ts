import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  templateUrl: './snippet-add.component.html',
  styleUrls: ['./snippet-add.component.css']
})
export class SnippetAddComponent {
  items: FirebaseListObservable<any[]>;
  uid: null;
  name: string;
  author: string;
  description: string;
  code: string;
  
  constructor(public af: AngularFire, private router: Router) {
    af.auth.subscribe(auth => {
      if (!auth){
        return;
      }
      this.items = af.database.list('/users/' + auth.uid);
    });
  }  

  save() {
    this.items.push({
        name: this.name, 
        author: this.author,
        description: this.description,
        code: this.code
    });
    this.router.navigate(['/list']);
  }

}
