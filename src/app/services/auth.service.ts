import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user = {
    username: 'asdf',
    rights: [
      // 'ADMIN',
      'USER',
      'GUEST',
    ]
  };

  public hasRight(right: string) {
    return !!this.user?.rights.includes(right);
  }
}
