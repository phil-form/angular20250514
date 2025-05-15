import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(
    private authService: AuthService,
  ) { }

  public getDemoText() {
    return 'DEMO FROM SERVICES !!!'
  }
}
