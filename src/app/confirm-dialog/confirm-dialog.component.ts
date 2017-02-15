import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
    selector: 'confirm-dialog',
    template: `
        <h1>{{ title }}</h1>
        <md-progress-spinner mode="indeterminate"></md-progress-spinner>
        <button type="button" md-raised-button 
            (click)="dialogRef.close(true)">OK</button>
        <button type="button" md-button 
            (click)="dialogRef.close()">Cancel</button>
    `,
})
export class ConfirmDialog {

    public title: string;

    constructor(public dialogRef: MdDialogRef<ConfirmDialog>) {

    }
}