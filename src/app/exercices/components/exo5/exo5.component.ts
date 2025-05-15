import {Component, OnInit} from '@angular/core';
import {Item} from '../../models/item.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-exo5',
  standalone: false,
  templateUrl: './exo5.component.html',
  styleUrl: './exo5.component.scss'
})
export class Exo5Component implements OnInit {
  item: Item;
  entityForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.entityForm = this.fb.group({
      name: [null, Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      quantity: [null, [Validators.required, Validators.min(0)]],
    });
  }

  onValueChange(event) {
    console.log(event);
  }

  submit() {
    if(this.entityForm.invalid) {
      this.entityForm.markAllAsTouched();
      return;
    }
  }
}
