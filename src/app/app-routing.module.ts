import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { UserGuard } from "./core/auth/guards/user-guard.service";
// import { NotFoundComponent } from "./error-pages/notfound/not-found.component";

/*
 add app module routes here, e.g., to lazily load a module
 (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
 */
const appRoutes = [
  {
    path: '500',
    loadChildren: './error-pages/500/500.module#Error500Module',
  },
  {
    path: '404',
    loadChildren: './error-pages/404/404.module#Error404Module',
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
  },
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
