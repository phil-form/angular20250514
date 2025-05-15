import { Injectable } from '@angular/core';
import {Item} from '../exercices/models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items: Item[] = [];
  private seq = 1;

  constructor() { }

  public getAll(): Item[] {
    return this.items;
  }

  public post(item: Item) {
    item.id = this.seq;
    this.seq++;
    this.items.push(item);
  }

  public delete(item: Item) {
    this.items.splice(this.items.findIndex((i) => i.id = item.id), 1);
  }
}
