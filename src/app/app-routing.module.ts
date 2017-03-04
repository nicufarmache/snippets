import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { SnippetListComponent }  from './snippets/snippet-list.component';
import { SnippetAddComponent }  from './snippets/snippet-add.component';
import { SnippetDetailComponent }  from './snippets/snippet-detail.component';

const appRoutes: Routes = [
  { path: 'list', component: SnippetListComponent},
  { path: 'add', component: SnippetAddComponent},
  { path: 'snippet/:id', component: SnippetDetailComponent},
  { path: '', children: [] }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}