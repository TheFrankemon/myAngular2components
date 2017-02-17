import { Observable } from 'rxjs/Rx';
import { ConfirmDialog } from './confirm-dialog.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable()
export class DialogsService {

	dialogRef : MdDialogRef<ConfirmDialog>;
	constructor(private dialog: MdDialog) {

	}

	public confirm(title: string, viewContainerRef: ViewContainerRef) : Observable<boolean> {
		let config = new MdDialogConfig();
		config.viewContainerRef = viewContainerRef;
		config.width = "60%";
		config.disableClose = true;

		this.dialogRef = this.dialog.open(ConfirmDialog, config);
		this.dialogRef.componentInstance.title = title;

		return this.dialogRef.afterClosed();
	}

	public callClose(msg : string) {
		this.dialogRef.close(msg);
	}
}