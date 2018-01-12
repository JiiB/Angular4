import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './core/auth.guard';
import { CustomersComponent } from './components/customers/customers.component';
import { ChecklistComponent } from './components/checklist/checklist.component';

const routes: Routes = [
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
