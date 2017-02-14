import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <loading-modal></loading-modal>
  `,
})
export class AppComponent  { name = 'Angular'; }
