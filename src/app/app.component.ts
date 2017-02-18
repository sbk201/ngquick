import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `<h1>Hello {{name}}</h1>
    <nav>
      <a routerLink="/plus" routerLinkActive="active">Plus</a>
      <a routerLink="/subtract" routerLinkActive="active">Subtract</a>
    </nav>
	<br><plus></plus>
	<br><router-outlet></router-outlet>

	`,
})
export class AppComponent  { name = 'Angular'; }

// Math
// add,subtract,mulitple,divide