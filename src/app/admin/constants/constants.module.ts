import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstantsComponent } from './constants.component';
import {ConstantsRoutingModule} from './constants-routing.module';
import {MessageService} from '../../core/message.service';
import {ConstantsService} from './constants.service';

@NgModule({
  imports: [
    CommonModule,
    ConstantsRoutingModule,
  ],
  declarations: [ConstantsComponent],
  providers: [MessageService, ConstantsService]
})
export class ConstantsModule { }
