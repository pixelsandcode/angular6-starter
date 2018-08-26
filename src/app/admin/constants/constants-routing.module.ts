import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConstantsComponent} from './constants.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: ConstantsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class ConstantsRoutingModule {}
