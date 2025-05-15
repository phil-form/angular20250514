import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exo1Component } from './components/exo1/exo1.component';
import { Exo2Component } from './components/exo2/exo2.component';
import { Exo3Component } from './components/exo3/exo3.component';
import { Exo4Component } from './components/exo4/exo4.component';
import { FormatTimerPipe } from './pipes/format-timer.pipe';
import { BasketComponent } from './components/exo3/basket/basket.component';
import { AddItemComponent } from './components/exo3/add-item/add-item.component';
import {RouterLink} from '@angular/router';
import {ExercicesRoutingModule} from './exercices-router.module';
import {FormsModule} from '@angular/forms';
import { ItemFormComponent } from './components/exo4/item-form/item-form.component';
import { ItemTableComponent } from './components/exo4/item-table/item-table.component';
import { Exo5Component } from './components/exo5/exo5.component';
import {SharedModule} from "../modules/shared/shared.module";



@NgModule({
  declarations: [
    Exo1Component,
    Exo2Component,
    Exo3Component,
    Exo4Component,
    FormatTimerPipe,
    BasketComponent,
    AddItemComponent,
    ItemFormComponent,
    ItemTableComponent,
    Exo5Component
  ],
    imports: [
        CommonModule,
        FormsModule,
        ExercicesRoutingModule,
        SharedModule
    ]
})
export class ExercicesModule { }
