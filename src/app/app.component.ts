import { Component } from '@angular/core';
import {TestHost} from './decorators/testHost.decorator';

@TestHost() @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
