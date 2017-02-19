import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { PlusComponent } from './plus.component';
import { SubtractComponent } from './subtract.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
	imports:      [ 
	BrowserModule ,
	AppRoutingModule,
	FormsModule
	],
	declarations: [
	AppComponent, 
	PlusComponent, 
	SubtractComponent
	],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }
