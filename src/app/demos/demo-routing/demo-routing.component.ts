import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Item} from '../../exercices/models/item.model';
import {ItemService} from '../../services/item-service.service';

@Component({
  selector: 'app-demo-routing',
  standalone: false,
  templateUrl: './demo-routing.component.html',
  styleUrl: './demo-routing.component.scss'
})
export class DemoRoutingComponent implements OnInit {
  item: Item;

  constructor(
    private router: Router,
    private itemService: ItemService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];

    this.itemService.find(5, {

    })

    if(!isNaN(id)) {
      this.item = this.itemService.getById(id);
    }
  }
}
