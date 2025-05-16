import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DemoComponent } from './demos/demo/demo.component';
import { DemoFormComponent } from './demos/demo-form/demo-form.component';
import {FlexModule} from '@angular/flex-layout';
import { DemoRoutingComponent } from './demos/demo-routing/demo-routing.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DemoFormComponent,
    DemoRoutingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
