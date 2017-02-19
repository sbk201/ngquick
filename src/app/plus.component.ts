import { Component, OnInit } from '@angular/core';
import { RecordService } from './record.service';
// import { ViewChild } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'plus',
	templateUrl: './plus.component.html',
	providers: [RecordService]
	// [(ngModel)]="hero.name"
	// styleUrls: ['./dashboard.component.css']
})
export class PlusComponent {
	v1: number;
	v2: number;
	v3: number;
	formula: string;
	// @ViewChild(RecordComponent) record: RecordComponent;
	constructor(
		private record: RecordService
		) { }
	keyup(e: any) {
		this.v1 = isNaN(this.v1) ? undefined : this.v1 | 0;
		this.v2 = isNaN(this.v2) ? undefined : this.v2 | 0;
		this.v3 = this.v1 + this.v2;
		if (isNaN(this.v3)) this.v3 = undefined;
		this.formula = this.v3? `${this.v1} + ${this.v2} = ${this.v3}` : undefined;
		// this.record.v1 = this.formula;
		// this.record.v1 = 'test';
		console.log(this.record);
		// this.record.test();
	}

	ngOnInit(): void {
		console.log(this)

	}
}
