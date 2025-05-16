import { CanActivateFn } from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../../../services/auth.service';

export const userGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService);

  return authService.hasRight('USER');
};
