import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'registration', pathMatch: 'full'},
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'registration',
      loadChildren: () => import('../../views/admin/registration/registration.module').then(m => m.RegistrationModule),
      },
      { path: 'users',
      loadChildren: () => import('../../views/admin/users/users.module').then(m => m.UsersModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
