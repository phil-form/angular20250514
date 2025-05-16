import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Person} from '../../exercices/models/person.model';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-demo-form',
  standalone: false,
  templateUrl: './demo-form.component.html',
  styleUrl: './demo-form.component.scss'
})
export class DemoFormComponent implements OnInit {
  entityForm: FormGroup;
  person: Person = {
    lastName: 'John',
    firstName: 'Smith',
    age: 45,
    email: 'john.smith@john.smith',
    description: 'John Smith',
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  )
  {}

  ngOnInit() {
    this.entityForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: ['Smith', Validators.required],
      email: [null, [Validators.required, Validators.email]],
      age: [null, [Validators.min(12), Validators.max(99)]],
      description: [null],
    });

    for (const entityFormKey in this.entityForm.controls) {
      switch (entityFormKey) {
        case 'firstName':
        case 'lastName':
        case 'email':
          if(!this.authService.hasRight('ADMIN')) {
            this.entityForm.get('firstName').disable();
            this.entityForm.get('lastName').disable();
            this.entityForm.get('email').disable();
          }
        case 'age':
        case 'description':
          break;
      }
    }

    // example update depuis la db :
    this.entityForm.patchValue(this.person);
  }

  cannotEdit() {
    let val = !this.authService.hasRight('ADMIN');
    return val;
  }

  getErrorMessage(error: any) {
    console.log(error);

    for (const errorElement in error) {
      switch (errorElement) {
        case 'required':
          return 'Field is required';
        case 'min':
          return `value must be at least ${error[errorElement].min}.`;
        case 'max':
          return `value must be at maximium ${error[errorElement].max}.`;
        case 'email':
          return `value must be a valid email.`;
        default:
          return `unknown error ${errorElement}`;
      }
    }
  }

  submit() {
    if(this.entityForm.invalid) {
      // force l'affichage des erreurs
      this.entityForm.markAllAsTouched();
      return;
    }

    let person = this.entityForm.value as Person;
    console.log(person.firstName);
  }
}
