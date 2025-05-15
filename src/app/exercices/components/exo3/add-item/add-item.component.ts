import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from '../../../models/item.model';

@Component({
  selector: 'app-add-item',
  standalone: false,
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.scss'
})
export class AddItemComponent {
  @Input() parentType: string;
  @Output() addItem: EventEmitter<Item> = new EventEmitter();
  item: Item = {} as Item;

  submit() {
    if (this.item) {
      this.addItem.emit(this.item);
      this.item = {} as Item;
    }
  }
}

export enum AddItemType {
  Exo3 = 'Exo3',
}
