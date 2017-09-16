import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {
  MdButtonModule,
  MdIconModule,
  MdProgressSpinnerModule,
  MdCheckboxModule,
  MdCardModule,
  MdSidenavModule,
  MdProgressBarModule,
  MdAutocompleteModule,
  MdRadioModule,
  MdInputModule,
  MdToolbarModule,
  MdDialogModule,
  MdTooltipModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AppComponent} from './app.component';
import 'hammerjs';
import {environment} from '../environments/environment';
import { ComponentViewerComponent } from './component-viewer/component-viewer.component';
import { PageHeaderComponent } from './page-header/page-header.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentViewerComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    MdButtonModule,
    MdIconModule,
    MdToolbarModule,
    MdDialogModule,
    MdRadioModule,
    MdTooltipModule,
    MdProgressBarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MdSidenavModule,
    MdProgressSpinnerModule,
    MdAutocompleteModule,
    MdCardModule,
    MdInputModule,
    MdCheckboxModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
