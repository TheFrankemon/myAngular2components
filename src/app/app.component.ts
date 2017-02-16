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
		this.value = Math.floor(Math.random() * 100);
		console.log(this.value);
	}

	public openDialog() {
		this.dialogsService
					.confirm('Loading...', 5, this.viewContainerRef)
					.subscribe(res => this.result = res);

		let timer = Observable.timer(0, 1000);
		timer.subscribe(x => {
			if (x >= 10)
				this.dialogsService.callClose('closed by app');
		});
	}
}
