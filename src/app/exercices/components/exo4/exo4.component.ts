import {Component, OnInit} from '@angular/core';
import {Item} from '../../models/item.model';
import {ItemService} from '../../../services/item-service.service';

@Component({
  selector: 'app-exo4',
  standalone: false,
  templateUrl: './exo4.component.html',
  styleUrl: './exo4.component.scss'
})
export class Exo4Component implements  OnInit {
  items: Item[] = [];

  constructor(
    private itemService: ItemService
  ) {
  }

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.items = this.itemService.getAll();
  }
}
