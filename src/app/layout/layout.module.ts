import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { LayoutComponent } from './layout.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { SearchComponent } from './top-navbar/search/search.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { LayoutService } from './layout.service';
import {SharedModule} from '../shared/shared.module';
import {NavDropDownDirectives} from '../shared/directives/nav-dropdown.directive';

@NgModule({
  declarations: [
    LayoutComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    TopNavbarComponent,
    SearchComponent,
    NavDropDownDirectives,
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    SimpleNotificationsModule.forRoot(),
  ],
  exports: [LayoutComponent],
  providers: [LayoutService],
})
export class LayoutModule {}
