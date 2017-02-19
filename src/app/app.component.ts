import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `<h1>Hello {{name}},Math app</h1>
    <nav>
      <a routerLink="/plus" routerLinkActive="active">Plus</a> 
      <a routerLink="/subtract" routerLinkActive="active">Subtract</a>
    </nav>
	<router-outlet></router-outlet>
	<br><record></record>

	`,
})
export class AppComponent  { name = 'Angular'; }

// Math
// add,subtract,mulitple,divide