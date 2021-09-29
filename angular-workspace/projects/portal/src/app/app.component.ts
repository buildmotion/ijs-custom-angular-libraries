import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portal';
  constructor() {
  }

  throwError() {
    throw new Error('A little bug caused an unexpected problem here, oh no!');
  }
}
