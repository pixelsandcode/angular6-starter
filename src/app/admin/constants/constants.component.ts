import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../core/message.service';
import {ConstantsService} from './constants.service';

@Component({
  selector: 'app-constants',
  templateUrl: './constants.component.pug',
  styleUrls: ['./constants.component.scss']
})
export class ConstantsComponent implements OnInit {
  list = [];
  messages = [];
  constructor(
    public messageService: MessageService,
    private constantsService: ConstantsService,
    ) { }

  ngOnInit() {
    this.constantsService.getList({page: 1, size: 20}).subscribe(
      res => {
        this.list = res.data.list;
      },
      err => {
        console.error(err);
      }
    );
    this.messages = this.messageService.messages;
  }

  clear() {
    this.messageService.clear();
  }

}
