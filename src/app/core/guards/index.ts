/* "Barrel" of Guards */

import {AdminAuthGuard} from './admin-auth-guard.service';
import {LoggedOutGuard} from './logged-out-guard.service';
import {AdminGuard} from './admin-guard.service';
import {UserGuard} from './user-guard.service';
import {AuthService} from '../auth.service';
import {DashboardGuard} from './dashboard-guard.service';
import {DashboardAuthGuard} from './dashboard-auth-guard.service';


export const AppGuards = [

  AdminAuthGuard,
  LoggedOutGuard,
  AdminGuard,
  UserGuard,
  AuthService,
  DashboardGuard,
  DashboardAuthGuard,

];
