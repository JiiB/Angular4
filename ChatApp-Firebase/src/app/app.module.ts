import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdInputModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';

export const firebaseConfig = {
  apiKey: "AIzaSyBMd95AuD8RZ5K2ND2ojRqHFrkbO3ZAP9c",
  authDomain: "playground-8711d.firebaseapp.com",
  databaseURL: "https://playground-8711d.firebaseio.com",
  projectId: "playground-8711d",
  storageBucket: "playground-8711d.appspot.com",
  messagingSenderId: "594498731171"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdInputModule,
    MdToolbarModule,
    MdIconModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
