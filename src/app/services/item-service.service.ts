import { Injectable } from '@angular/core';
import {Item} from '../exercices/models/item.model';
import {Crud, CrudConfig} from "./crud";
import {HttpWrapperService} from "./http-wrapper.service";

const crudConfig: CrudConfig = {
  single: (id: number) => `items/${id}`,
  many: 'items',
}

@Injectable({
  providedIn: 'root'
})
export class ItemService extends Crud<Item> {
  private items: Item[] = [
    {
      id: 1,
      name: 'asdf',
      price: 100,
      quantity: 20
    },
    {
      id: 2,
      name: 'qwer',
      price: 100,
      quantity: 20
    },
  ];
  private seq = 3;

  constructor(
    protected http: HttpWrapperService,
  ) {
    super(http, crudConfig);
  }

  public getById(id: number): Item {
    return this.items.find(item => item.id == id);
  }

  public getAll(): Item[] {
    return this.items;
  }

  protected transformEntity(entity: Item): Item {
    // Implement any transformation logic if needed
    return entity;
  }

  // public post(item: Item) {
  //   item.id = this.seq;
  //   this.seq++;
  //   this.items.push(item);
  // }
  //
  // public delete(item: Item) {
  //   this.items.splice(this.items.findIndex((i) => i.id = item.id), 1);
  // }
}
