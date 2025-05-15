import { Component } from '@angular/core';
import {Item} from '../../models/item.model';
import {AddItemType} from './add-item/add-item.component';

@Component({
  selector: 'app-exo3',
  standalone: false,
  templateUrl: './exo3.component.html',
  styleUrl: './exo3.component.scss'
})
export class Exo3Component {
  basket: Item[] = [];
  addIemTypes = AddItemType;

  addItem(item: Item) {
    this.basket.push(item);
  }

  deleteItem(index: number) {
    this.basket.splice(index, 1);
  }
}
