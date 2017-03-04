import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './snippet-detail.component.html',
  styleUrls: ['./snippet-detail.component.css']
})
export class SnippetDetailComponent {
  item: FirebaseObjectObservable<any[]>;
  
  constructor(public af: AngularFire, private router: Router,private route: ActivatedRoute) {
    af.auth.subscribe(auth => {
      if (!auth){
        return;
      }
      this.route.params.subscribe(params => {
        this.item = af.database.object('/users/' + auth.uid + "/" + params['id']);
      });
    });
  }  
}
