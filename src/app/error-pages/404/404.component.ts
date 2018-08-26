import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../shared/services/config/config.service';
import { GlobalState } from '../../app.state';

@Component({
  // selector: '.content_inner_wrapper',
  templateUrl: './404.component.pug',
  styleUrls: ['./404.component.scss'],
})
export class Error404Component implements OnInit {
  constructor(
    public config: ConfigService,
    public state: GlobalState) {
  }

  ngOnInit() {}
}
