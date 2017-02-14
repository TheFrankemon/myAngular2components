import { Component, ViewContainerRef } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
	selector: 'my-app',
	template: `
		<h1>Hello {{name}}</h1>
		<button (click)="showBasic()">Basic modal</button>
		<button (click)="showModded()">Modded modal</button>
	`
})
export class AppComponent  {
	name = 'Angular';

	constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
		overlay.defaultViewContainer = vcRef;
	}

	showBasic() {
		this.modal.alert()
				.size('lg')
				.showClose(true)
				.title('A simple Alert style modal window')
				.body(`
						<h4>Alert is a classic (title/body/footer) 1 button modal window that 
						does not block.</h4>
						<b>Configuration:</b>
						<ul>
							<li>Non blocking (click anywhere outside to dismiss)</li>
							<li>Size large</li>
							<li>Dismissed with default keyboard key (ESC)</li>
							<li>Close wth button click</li>
							<li>HTML content</li>
						</ul>
					`)
				.open();
  }

	showModded() {
		this.modal.alert()
				.size('sm')
				.isBlocking(true)
				.showClose(true)
				.title('A custom modal')
				.body(`
						<h4>Alert is a classic (title/body/footer) 1 button modal window that 
						does not block.</h4>
						<b>Configuration:</b>
					`)
				.open();
  }
}
