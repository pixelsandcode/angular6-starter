import { Component, OnInit } from '@angular/core';
import { GlobalState } from '../../../app.state';
import { ConfigService } from '../../services/config/config.service';
@Component({
  selector: 'profile',
  templateUrl: './profile.component.pug',
  styleUrls: ['./profile.component.scss']
})
export class Profile implements OnInit {
  isProfileVisible = true;
  isProfileSubmenuVisible = false;
  profile =
    {
      id: '160d0948-62a7-4439-98aa-0b95f1143b0d',
      name: 'Fredrick Palmer',
      profileImg: '18.jpg',
      backgroundImg: 'header-md-01.jpg',
      phone: '',
      email: 'admin@materiallab.pro'
    };

  constructor(public config: ConfigService, private _state: GlobalState) {
    this._state.subscribe('profile.isProfileVisible', isProfileVisible => {
      this.isProfileVisible = this.config.profile.isProfileVisible;
    });
  }
  ngOnInit() {}
}
