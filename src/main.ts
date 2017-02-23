import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { DialogsModule } from './app/confirm-dialog/dialogs.module';
import { SliderModule } from './app/slider/slider.module';
import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';

@NgModule({
	imports: [
		BrowserModule,
		MaterialModule.forRoot(),
		DialogsModule,
		SliderModule
	],
	declarations: [ AppComponent ],
	bootstrap: [ AppComponent ]
})
export class exampleAppModule {}

platformBrowserDynamic().bootstrapModule(exampleAppModule);