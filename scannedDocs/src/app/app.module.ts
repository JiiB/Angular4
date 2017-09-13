import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MdButtonModule, MdMenuModule, MdProgressBarModule, MdInputModule, MdTooltipModule, MdCardModule, MdDialogModule, MdToolbarModule, MdIconModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MyDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MdButtonModule, 
    MdToolbarModule,
    MdInputModule,
    MdCardModule,
    MdProgressBarModule,
    MdTooltipModule,
    MdDialogModule,
    MdIconModule,
    MdMenuModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    MyDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
