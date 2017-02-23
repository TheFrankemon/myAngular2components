import { Component, ViewEncapsulation, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'slider',
	moduleId: module.id,
	templateUrl: './slider.component.html',
	encapsulation: ViewEncapsulation.None,
})
export class Slider {
	autoTicks = false;
	disabled = false;
	max = 100;
	min = 0;
	showTicks = false;
	//step = 1;
	thumbLabel = true;
	value = 0;
	steppedValue = 0;
	@Output() onUpdate = new EventEmitter<number>();

	update(newValue : number) {
		this.onUpdate.emit(newValue);
	}
}
