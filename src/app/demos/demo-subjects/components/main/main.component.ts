import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {TaskService} from '../../../../services/task.service';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit, OnDestroy {
  actionDone: string = 'No action done yet';
  taskSubscription: Subscription;

  constructor(
    private taskService: TaskService
  ) {
  }

  ngOnInit() {
    this.taskSubscription = this.taskService.asObservable().subscribe((task) => {
      this.actionDone = task.actions();
    });
  }

  ngOnDestroy() {
    if (this.taskSubscription) {
      this.taskSubscription.unsubscribe();
    }
  }
}
