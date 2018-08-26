import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  public messages: string[] = [];

  add(message: string) {
    console.log(message)
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
