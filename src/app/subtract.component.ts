import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'subtract',
	templateUrl: './subtract.component.html',

})
export class SubtractComponent {
	// only numbers
	v1: number;
	v2: number;
	v3: number;
	constructor() { }
	keyup(e: any) {
		this.v1 = isNaN(this.v1) ? undefined : this.v1 | 0;
		this.v2 = isNaN(this.v2) ? undefined : this.v2 | 0;
		this.v3 = this.v1 - this.v2;
		if (isNaN(this.v3)) this.v3 = undefined;
	}

	ngOnInit(): void {
	}
}
