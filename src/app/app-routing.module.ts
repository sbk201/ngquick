import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlusComponent } from './plus.component';
import { SubtractComponent } from './subtract.component';
import { RecordComponent } from './record.component';


const routes: Routes = [
	{ path: '', redirectTo: 'plus', pathMatch: 'full' },
	{ path: 'plus', component: PlusComponent },
	{ path: 'subtract', component: SubtractComponent },
	{ path: 'record', component: RecordComponent },

];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }