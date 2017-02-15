import { Component, ViewContainerRef } from '@angular/core';
import { DialogsService } from './confirm-dialog/dialogs.service';

@Component({
	selector: 'my-app',
	template: `
		<md-toolbar color="primary">
			<h2>Hello {{name}}</h2>
		</md-toolbar>

		<div>
			<button md-raised-button (click)="openDialog()">Open Dialog</button>
			<p>Result from dialog: {{ result }}</p>
		</div>
	`
})
export class AppComponent  {
	name = 'Angular Material 2';
	public result : any;

	constructor(private viewContainerRef: ViewContainerRef,	private dialogsService: DialogsService) {

	}

	public openDialog() {
		this.dialogsService
					.confirm('Loading...', this.viewContainerRef)
					.subscribe(res => this.result = res);
	}
}
