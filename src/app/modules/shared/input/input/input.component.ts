import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: false,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements OnInit {
  @Input() control: FormControl;
  @Input() type: 'text' | 'password' | 'email' | 'number' | 'date' | 'textarea';
  @Input() placeholder: string;
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  onValueChange(event) {
    this.onChange.emit(event.target.value);
  }
}
