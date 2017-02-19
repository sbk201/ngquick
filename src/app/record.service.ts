import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable()
export class RecordService {
	v1: string='1234';
	constructor() { }

	ngOnInit(): void {

	}
	test() {
		console.log('k');
	}
}
