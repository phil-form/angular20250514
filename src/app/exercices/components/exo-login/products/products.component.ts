import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../../services/product.service';
import {Product} from '../../../models/product.model';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  products: Product[];

  constructor(
    private productService: ProductService,
  ) {
  }

  ngOnInit() {
    this.productService.findAll().subscribe(
      (response: Product[]) => {
        this.products = response;
      }
    );
  }
}
