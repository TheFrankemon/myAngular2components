import { Component, ViewContainerRef } from '@angular/core';
import { DialogsService } from './confirm-dialog/dialogs.service';

@Component({
	selector: 'my-app',
	moduleId: module.id,
	templateUrl: './app.component.html'
})
export class AppComponent  {
	name = 'Angular Material 2';
	public result : any;

	constructor(private viewContainerRef: ViewContainerRef,	private dialogsService: DialogsService) {

	}

	public openDialog() {
		this.dialogsService
					.confirm('Loading...', 5, this.viewContainerRef)
					.subscribe(res => this.result = res);
	}
}
