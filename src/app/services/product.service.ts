import { Injectable } from '@angular/core';
import {Crud, CrudConfig} from './crud';
import {Product} from '../exercices/models/product.model';
import {HttpWrapperService} from './http-wrapper.service';

const config: CrudConfig = {
  single: (id) => `products/${id}`,
  many: 'products',
}

@Injectable({
  providedIn: 'root'
})
export class ProductService extends Crud<Product>{

  constructor(
    protected http: HttpWrapperService,
  ) {
    super(http, config);
  }

  protected transformEntity(entity: any): Product {
    return entity.product as Product;
  }

  protected transformEntities(entities: any): Product[] {
    return entities.products;
  }
}
