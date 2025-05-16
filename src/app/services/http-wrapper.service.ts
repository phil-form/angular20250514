import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CrudParams} from './crud';

@Injectable({
  providedIn: 'root'
})
export class HttpWrapperService {

  constructor(
    private http: HttpClient,
  ) { }

  get<T>(url: string, params?: CrudParams<T>): Observable<T> {
    return this.http.get<T>(url, { params: params as any });
  }

  post<T>(url: string, body: any, params?: CrudParams<T>): Observable<T> {
    return this.http.post<T>(url, body, { params: params as any });
  }

  put<T>(url: string, body: any, params?: CrudParams<T>): Observable<T> {
    return this.http.put<T>(url, body, { params: params as any });
  }

  delete<T>(url: string, params?: CrudParams<T>): Observable<T> {
    return this.http.delete<T>(url, { params: params as any });
  }
}
