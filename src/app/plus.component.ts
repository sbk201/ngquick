import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'plus',
	templateUrl: './plus.component.html',
	// [(ngModel)]="hero.name"
	// styleUrls: ['./dashboard.component.css']
})
export class PlusComponent {
	v1: number;
	v2: number;
	v3: number;
	constructor() { }
	keyup(e: any) {
		if (isNaN(this.v1)) this.v1 = undefined;
		if (isNaN(this.v2)) this.v2 = undefined;
		this.v3 = this.v1 + this.v2;
		if (isNaN(this.v3)) this.v3 = undefined;
	}

	ngOnInit(): void {

	}
}
