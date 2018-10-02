import { Injectable } from '@angular/core';
import {spyable} from './decorators/spyable';

@Injectable({ providedIn: 'root' })
@spyable
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
