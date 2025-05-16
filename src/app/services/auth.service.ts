import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from "../exercices/models/user.model";
import {environment} from "../../environments/environment";
import {JwtHelperService} from "@auth0/angular-jwt";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: User;
  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
  ) {
  }

  login(user: User)
  {
    return this.http.post(`${environment.api.url}/auth/login`, user)
        .pipe(tap(
            (response: any) => {
                localStorage.setItem('token', response.accessToken);
                this.user = response;
                console.log('Login successful');
            },
            (error) => {
                console.error('Login failed', error);
            }
        )
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.user = null;
  }

  public hasRight(right: string) {
    // check rights if needed.
    // no roles but genders

    return this.user.gender === right;
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public getUser() {
    let token = localStorage.getItem('token');
    if (token) {
        let content = this.jwtHelper.decodeToken(token);
        if (content) {
            this.user = content;
            return content;
        } else {
            return null;
        }
    }
  }
}
