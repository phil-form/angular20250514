import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {AuthService} from '../../../../services/auth.service';

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
  @Input() rights: string[];
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  constructor(
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.checkRights();
  }

  onValueChange(event) {
    this.checkRights();
    this.onChange.emit(event.target.value);
  }

  private checkRights() {
    if(this.rights) {
      let shouldDisable = false;
      for (const right of this.rights) {
        shouldDisable = shouldDisable || !this.authService.hasRight(right);
      }
      if (shouldDisable) {
        this.control.disable();
      }
    }
  }
}
