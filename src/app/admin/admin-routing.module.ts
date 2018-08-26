import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from '../layout/layout.component';
import {LoggedOutGuard} from '../core/guards/logged-out-guard.service';

// import { LoggedOutGuard } from "../core/auth/guards/logged-out-guard.service";
// import { AdminAuthGuard } from "../core/auth/guards/admin-auth-guard.service";
// import { LayoutComponent } from "../layout/layout.component";
// import { AdminComponent } from "./admin.component";

const adminRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AdminAuthModule',
    // canLoad: [AdminAuthGuard],
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'constants',
        loadChildren: './constants/constants.module#ConstantsModule',
        canLoad: [LoggedOutGuard],
      },
      {
        path: '',
        redirectTo: '/admin/constants',
        pathMatch: 'full',
      },
    ],
  },
  // {
  //   path: '',
  //   redirectTo: '/admin/constants',
  //   pathMatch: 'full',
  // },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
