import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
	selector: 'confirm-dialog',
	template: `
		<md-progress-spinner mode="indeterminate"></md-progress-spinner>
		<br/>
		<h1>{{ title }}</h1>
		<button type="button" md-button color="accent" (click)="dialogRef.close('canceled')">Cancel</button>
	`,
})
export class ConfirmDialog {

	public title: string;

	constructor(public dialogRef: MdDialogRef<ConfirmDialog>) {
		
	}
}