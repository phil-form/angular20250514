import {Component, EventEmitter, Output} from '@angular/core';
import {Item} from '../../../models/item.model';
import {ItemService} from '../../../../services/item-service.service';

@Component({
  selector: 'app-item-form',
  standalone: false,
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.scss'
})
export class ItemFormComponent {
  item: Item = new Item();
  @Output() addItemEmitter = new EventEmitter();

  constructor(
    private itemService: ItemService
  ) {
  }

  submit() {
    this.itemService.post(this.item).subscribe();
    this.item = {} as Item;
    this.addItemEmitter.emit(null);
  }
}
