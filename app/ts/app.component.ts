import {Component} from 'angular2/core';
import {LoadingModalComponent} from './loadingmodal.component';

@Component({
	selector: 'my-app',
	template: '<h1>Angular 2 Template</h1><loadingmodal></loadingmodal>',
	directives: [LoadingModalComponent]
})

export class AppComponent {}
