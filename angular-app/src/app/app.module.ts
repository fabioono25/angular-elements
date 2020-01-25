import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { HiComponent } from './hi/hi.component';

import { createCustomElement } from '@angular/elements';
import { HiFormComponent } from './hi-form/hi-form.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HiComponent,
    HiFormComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  entryComponents: [HiComponent, HiFormComponent],
  providers: []
})
export class AppModule { 

  constructor(injector: Injector) {
    const custom = createCustomElement(HiComponent, {injector});

    customElements.define('app-hi', custom);

    const hiFormComponent = createCustomElement(HiFormComponent, {injector});
    customElements.define('app-hi-form', hiFormComponent);
  }

  ngDoBootstrap(){} //telling the Angular to run the bootstrapping for us
}
