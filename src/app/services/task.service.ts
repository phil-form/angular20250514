import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Task} from '../demos/demo-subjects/components/embedded/embedded.component';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskSubject: Subject<Task> = new Subject<Task>();

  constructor() { }

  asObservable() {
    return this.taskSubject.asObservable();
  }

  triggerAction(task: Task) {
    this.taskSubject.next(task);
  }
}
