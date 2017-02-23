import { Observable } from 'rxjs/Rx';
import { Component, ViewContainerRef, Input } from '@angular/core';
import { DialogsService } from './confirm-dialog/dialogs.service';

@Component({
	selector: 'my-app',
	moduleId: module.id,
	templateUrl: './app.component.html'
})
export class AppComponent  {
	name = 'Angular Material 2';
	public result : any;
	mode = 'determinate';
	value : number;
	bigValue = 50;

	constructor(private viewContainerRef: ViewContainerRef,	private dialogsService: DialogsService) {
	}

	public openDialog() {
		this.value = Math.floor(Math.random() * 50);
		//on an event, this calls the dialog to appear
		this.dialogsService
					.confirm('Loading...', this.viewContainerRef)
					.subscribe(res => this.result = res);

		setTimeout(() => {
			this.dialogsService.callClose('closed by app');
			this.value = 0;
		}, this.value*1000);
	}

	onUpdate(num: number) {
    this.bigValue = num;
  }
}
