import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, SharedModule, AuthRoutingModule],
  providers: [AuthService],
})
export class AdminAuthModule {}
