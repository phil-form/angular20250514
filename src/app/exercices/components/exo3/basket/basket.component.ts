import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from '../../../models/item.model';

@Component({
  selector: 'app-basket',
  standalone: false,
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent {
  @Input() items: Item[] = [];
  @Output() deleteItemEmitter: EventEmitter<number> = new EventEmitter();

  deleteItem(index: number) {
    this.deleteItemEmitter.emit(index);
  }
}
