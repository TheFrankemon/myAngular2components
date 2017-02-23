import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Slider }   from './slider.component';

@NgModule({
	imports: [
		MaterialModule.forRoot(),
		FormsModule
    ],
	exports: [
		Slider,
	],
	declarations: [
		Slider,
	]
})
export class SliderModule { }
