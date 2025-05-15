import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../../../models/item.model';
import {ItemService} from '../../../../services/item-service.service';

@Component({
  selector: 'app-item-table',
  standalone: false,
  templateUrl: './item-table.component.html',
  styleUrl: './item-table.component.scss'
})
export class ItemTableComponent {
  @Input() items: Item[];
  @Output() deleteItemEmitter: EventEmitter<number> = new EventEmitter();

  constructor(
    private itemService: ItemService,
  ) {
  }

  deleteItem(index: number) {
    this.itemService.delete(this.items[index]);
    this.deleteItemEmitter.emit(null);
  }
}
