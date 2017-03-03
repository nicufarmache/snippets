import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsModule } from 'ng2-bootstrap/buttons';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SnippetListComponent }  from './snippets/snippet-list.component';

export const firebaseConfig = {
  apiKey: "AIzaSyA8I7irjtAshOVqMPlqd66UZ-DRp7UKGeM",
  authDomain: "snippets-ddd8d.firebaseapp.com",
  databaseURL: "https://snippets-ddd8d.firebaseio.com",
  storageBucket: "snippets-ddd8d.appspot.com",
  messagingSenderId: "538785453132"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

const appRoutes: Routes = [
  { path: '', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SnippetListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    ButtonsModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
