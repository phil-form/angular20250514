import {Component, OnInit} from '@angular/core';
import {Form, FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {User} from '../../exercices/models/user.model';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
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
