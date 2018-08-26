import {
  Component,
  OnInit,
  ElementRef,
  HostListener
} from '@angular/core';
import {Router} from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

import { GlobalState } from '../../app.state';
import { ConfigService } from '../../shared/services/config/config.service';
// import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './left-sidebar.component.pug',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {
  notificationOptions = {
    position: ['bottom', 'right'],
    timeOut: 3000,
    lastOnBottom: false,
    preventDuplicates: true,
    showProgressBar: false,
    animate: 'scale',
  };

  public scrollbarOptions = {
    axis: 'y',
    theme: 'minimal',
    scrollInertia: 0,
    mouseWheel: { preventDefault: true }
  };

  constructor(
    // guardsService: AuthService,
    public notificationsService: NotificationsService,
    public config: ConfigService,
    public router: Router,
    private _elementRef: ElementRef,
    private _state: GlobalState) {
  }
  ngOnInit() {
    // this.scope = this.guardsService.scope();
  }

  @HostListener('window:resize')
  public onWindowResize(): void { }

  onLogout() {
    console.log('admin Logout');
    this.router.navigate(['/admin/auth']);
  //   switch (this.scope) {
  //     case "admin": {
  //       localStorage.clear();
  //       this.router.navigate(["/admin/login"]);
  //       // this.layoutService.adminLogOut().subscribe(
  //       //   () => {
  //       //     this.router.navigate(["/admin/login"]);
  //       //   },
  //       //   () => {
  //       //     this.notificationsService.error(
  //       //       "خطا",
  //       //       "متاسفانه مشکلی در ارائه خدمات پیش آمده!",
  //       //     );
  //       //   },
  //       // );
  //       break;
  //     }
  //     case "shop":
  //     case "guest": {
  //       localStorage.clear();
  //       this.router.navigate(["/dashboard/login"]);
  //       // this.layoutService.dashboardLogOut().subscribe(
  //       //   () => {
  //       //     this.router.navigate(["/dashboard/login"]);
  //       //   },
  //       //   () => {
  //       //     this.notificationsService.error(
  //       //       "خطا",
  //       //       "متاسفانه مشکلی در ارائه خدمات پیش آمده!",
  //       //     );
  //       //   },
  //       // );
  //       break;
  //     }
  //     default:
  //       break;
  //   }
  }

}
