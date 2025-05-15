import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input-error',
  standalone: false,
  templateUrl: './input-error.component.html',
  styleUrl: './input-error.component.scss'
})
export class InputErrorComponent {
  @Input() errors: { [key: string]: any };

  getErrorsAsArray() {
    let errors: any[] = [];
    for (let err in this.errors) {
      errors.push({
        name: err,
        value: this.errors[err]
      });
    }
    return errors;
  }

  getErrorMessage(error: any) {
    switch (error.name) {
      case 'required':
        return 'Field is required';
      case 'min':
        return `value must be at least ${error.value.min}.`;
      case 'max':
        return `value must be at maximium ${error.value.max}.`;
      case 'email':
        return `value must be a valid email.`;
      default:
        return `unknown error ${error}`;
    }
  }
}
