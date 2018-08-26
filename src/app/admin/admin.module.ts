import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { DataSource } from "@angular/cdk";
import { FormsModule } from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { LayoutModule } from '../layout/layout.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [AdminComponent],
  /**
   * Import Angular's modules.
   */
  imports: [
    // DataSource,
    CommonModule,
    FormsModule,
    LayoutModule,
    AdminRoutingModule,
    SimpleNotificationsModule.forRoot(),
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
})
export class AdminModule {}
