import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../../../models/user.model';
import {AuthService} from '../../../../services/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent  implements OnInit {
  entityForm: FormGroup;
  user: User;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    let user = this.authService.getUser();

    this.entityForm = this.fb.group({
      username: [null],
      password: [null],
    });

    if (user) {
      this.entityForm.get('username').setValue(user.username);
      this.entityForm.get('password').setValue(user.password);
    }
  }

  login() {
    let user = {} as User;
    user.username = this.entityForm.get('username').value;
    user.password = this.entityForm.get('password').value;
    this.authService.login(user).subscribe(
      (response: any) => {
        console.log(this.authService.getUser());
        this.entityForm.reset();
        this.user = this.authService.getUser();
      }
    );
  }
}
