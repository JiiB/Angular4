import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';

import {
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatCheckboxModule,
  MatCardModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatAutocompleteModule,
  MatRadioModule,
  MatInputModule,
  MatExpansionModule,
  MatToolbarModule,
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import 'hammerjs';
import { environment } from '../environments/environment';
import { ComponentViewerComponent } from './components/component-viewer/component-viewer.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomersService } from './providers/customers.service';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { QuestionsService } from './providers/questions.service';
import { AuthGuard } from './core/auth.guard';
import { EditCustomerDialogComponent } from './components/dialogs/edit-customer-dialog/edit-customer-dialog.component';
import { AddCustomerDialogComponent } from './components/dialogs/add-customer-dialog/add-customer-dialog.component';
import { DefaultdialogComponent } from './components/dialogs/defaultdialog/defaultdialog.component';
import { ChecklistService } from './providers/checklist.service';


@NgModule({
  declarations: [
    AppComponent,
    ComponentViewerComponent,
    PageHeaderComponent,
    LoginComponent,
    DashboardComponent,
    CustomersComponent,
    ChecklistComponent,
    EditCustomerDialogComponent,
    AddCustomerDialogComponent,
    DefaultdialogComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatRadioModule,
    MatTooltipModule,
    MatProgressBarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatExpansionModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    CoreModule
  ],
  entryComponents: [
    AddCustomerDialogComponent, EditCustomerDialogComponent, DefaultdialogComponent
  ],
  providers: [CustomersService, QuestionsService, ChecklistService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
