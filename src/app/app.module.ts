import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { ButtonsModule } from 'ng2-bootstrap/buttons';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';

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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
