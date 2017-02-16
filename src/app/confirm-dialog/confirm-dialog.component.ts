import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
	selector: 'confirm-dialog',
	moduleId: module.id,
	templateUrl: './confirm-dialog.component.html',
})
export class ConfirmDialog {

	public title: string;

	constructor(public dialogRef: MdDialogRef<ConfirmDialog>) {
		
	}
}