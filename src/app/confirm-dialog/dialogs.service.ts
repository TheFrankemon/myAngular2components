import { Observable } from 'rxjs/Rx';
import { ConfirmDialog } from './confirm-dialog.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable()
export class DialogsService {

	constructor(private dialog: MdDialog) {
		
	}

	public confirm(title: string, viewContainerRef: ViewContainerRef): Observable<boolean> {
		let dialogRef: MdDialogRef<ConfirmDialog>;
		let config = new MdDialogConfig();
		config.viewContainerRef = viewContainerRef;
		config.width = "60%";
		//config.height = "40%";
		config.disableClose = true;

		dialogRef = this.dialog.open(ConfirmDialog, config);
		dialogRef.componentInstance.title = title;

		return dialogRef.afterClosed();
	}
}