import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
            { enableTracing: true } // <-- debugging purposes only)
        ),
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
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
