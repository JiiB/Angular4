import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    MatToolbarModule,
    MatDialogModule,
    MatTooltipModule
} from '@angular/material'; 
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AppComponent} from './app.component';
import 'hammerjs';
import {environment} from '../environments/environment';
import { ComponentViewerComponent } from './component-viewer/component-viewer.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { LoginComponent } from './login/login.component';
import {AuthService} from './providers/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        ComponentViewerComponent,
        PageHeaderComponent,
        LoginComponent,
        DashboardComponent
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
        MatSidenavModule,
        MatProgressSpinnerModule,
        MatAutocompleteModule,
        MatCardModule,
        MatInputModule,
        MatCheckboxModule,
        BrowserAnimationsModule,
        FlexLayoutModule
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
