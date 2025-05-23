import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './services/auth.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'untitled2';

  constructor(
    private router: Router,
    private authService: AuthService,
    private translate: TranslateService,
  )
  {
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('fr');
    this.translate.use('en');
  }

  ngOnInit(): void {
    this.authService.logout();
  }
}
