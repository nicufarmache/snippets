import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { SnippetListComponent }  from './snippets/snippet-list.component';
const appRoutes: Routes = [
  { path: 'list', component: SnippetListComponent },
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