import { Observable } from 'rxjs/Rx';
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
  mode = 'determinate';
	value : number;

	constructor(private viewContainerRef: ViewContainerRef,	private dialogsService: DialogsService) {
	}

	public openDialog() {
		this.value = Math.floor(Math.random() * 50);
		console.log(this.value);
		//on an event, this calls the dialog to appear
		this.dialogsService
					.confirm('Loading...', this.viewContainerRef)
					.subscribe(res => this.result = res);

		//timer seems unstoppable :( be careful
		var timer = Observable.timer(0, 1000);
		timer.subscribe(x => {
			if (x >= this.value)
				//on an event, this calls the dialog to close
				this.dialogsService.callClose('closed by app');
				timer = null;
		});
	}
}
