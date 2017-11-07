import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
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
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AppComponent} from './app.component';
import 'hammerjs';
import {environment} from '../environments/environment';
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

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'customers',
        component: CustomersComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'checklist',
        component: ChecklistComponent,
        canActivate: [AuthGuard],
        children: [{
            path: ':id',
            component: ChecklistComponent
          }]
    }
];

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
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false } // <-- debugging purposes only)
        ),
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
        AddCustomerDialogComponent, EditCustomerDialogComponent
    ],
    providers: [CustomersService, QuestionsService, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
