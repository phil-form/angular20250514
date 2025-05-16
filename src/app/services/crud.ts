import {map, Observable, tap} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpWrapperService} from './http-wrapper.service';

export class CrudConfig {
  single: (id: any) => string;
  many: string;
}

export class Crud<T> {
  constructor(
    protected http: HttpWrapperService,
    protected config: CrudConfig,
  ) {
  }

  protected transformEntity(entity: T): T {
    // Implement any transformation logic if needed
    return entity;
  }

  protected transformEntities(entities: T[]): T[] {
    // Implement any transformation logic if needed
    return entities;
  }

  find(id: any, params?: CrudParams<T>): Observable<T> {
    return this.http.get<T>(`${environment.api.url}/${this.config.single(id)}`, params)
      .pipe(map((e) => this.transformEntity(e)));
  }

  findAll(params?: CrudParams<T>): Observable<T[]> {
    return this.http.get<T[]>(`${environment.api.url}/${this.config.many}`, params)
      // .pipe(map((entities) => entities.map((e) => this.transformEntity(e))));
      .pipe(map((entities) => this.transformEntities(entities)));
  }

  post(entity: T, params?: CrudParams<T>): Observable<T> {
    return this.http.post<T>(`${environment.api.url}/${this.config.many}`, entity, params)
      .pipe(map((e) => this.transformEntity(e)));
  }

  put(entity: T, params?: CrudParams<T>): Observable<T> {
    return this.http.put<T>(`${environment.api.url}/${this.config.single(entity['id'])}`, entity, params)
      .pipe(map((e) => this.transformEntity(e)));
  }

  delete(id: any, params?: CrudParams<T>): Observable<T> {
    return this.http.delete<T>(`${environment.api.url}/${this.config.single(id)}`, params)
      .pipe(map((e) => this.transformEntity(e)));
  }
}

type NonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? never : K;
}[keyof T];

export type CrudParams<T> = {
  [K in NonFunctionPropertyNames<T>]?: any;
} & {
  [key: string]: any;
};
