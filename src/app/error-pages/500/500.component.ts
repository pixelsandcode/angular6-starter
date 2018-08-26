import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../shared/services/config/config.service';
import { GlobalState } from '../../app.state';

@Component({
  // selector: '.content_inner_wrapper',
  templateUrl: './500.component.pug',
  styleUrls: ['./500.component.scss'],
})
export class Error500Component implements OnInit {
  constructor(
    public config: ConfigService,
    public state: GlobalState) {
  }

  ngOnInit() {}
}
