import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { RecordService } from './record.service';
import { RecordComponent } from './record.component';
import { PlusComponent } from './plus.component';
import { SubtractComponent } from './subtract.component';

@NgModule({
	imports:      [ 
	BrowserModule ,
	AppRoutingModule,
	FormsModule
	],
	declarations: [
	AppComponent, 
	PlusComponent, 
	SubtractComponent,
	RecordComponent
	],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }
