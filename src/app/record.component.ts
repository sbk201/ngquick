import { Component, OnInit } from '@angular/core';
// import { Injectable } from '@angular/core';
// record.service???

@Component({
	moduleId: module.id,
	selector: 'record',
	templateUrl: './record.component.html',
})
export class RecordComponent {
	v1: string;
	constructor() { }

	ngOnInit(): void {

	}
	test(){
		console.log('k');
	}
}
