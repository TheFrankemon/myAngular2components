import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { LoadingModalComponent }   from './loadingmodal.component';

@NgModule({
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  declarations: [ LoadingModalComponent ],
  bootstrap:    [ LoadingModalComponent ]
})
export class LoadingModalModule { }