import {Routes,CanActivate} from '@angular/router';
import {UserDetailComponent} from './user-detail.component';
import {UserEditComponent} from './user-edit.component';
import {UserDetailGuard} from './user-detail.guard';
import { UserEditGuard } from "./user-edit.guard";


export const USER_ROUTES: Routes = [
    // { path: '', redirectTo: 'detail' },
    { path: 'detail', component: UserDetailComponent, canActivate: [UserDetailGuard] },
    { path: 'edit', component: UserEditComponent, canDeactivate: [UserEditGuard] }
];

