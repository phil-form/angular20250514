import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input/input.component';
import { InputErrorComponent } from './input/input-error/input-error.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    InputComponent,
    InputErrorComponent
  ],
  exports: [
    InputComponent,
    ReactiveFormsModule,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
