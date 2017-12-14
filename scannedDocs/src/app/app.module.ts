import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// tslint:disable-next-line:max-line-length
import {MatButtonModule, MatSnackBarModule, MatMenuModule, MatProgressBarModule, MatInputModule, MatTooltipModule, MatCardModule, MatDialogModule, MatToolbarModule, MatIconModule} from '@angular/material';
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
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    MyDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
