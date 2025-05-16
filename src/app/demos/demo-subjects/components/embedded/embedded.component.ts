import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {TaskService} from '../../../../services/task.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-embedded',
  standalone: false,
  templateUrl: './embedded.component.html',
  styleUrl: './embedded.component.scss'
})
export class EmbeddedComponent implements OnInit, OnDestroy{
  @Input() task: Task;
  subscription: Subscription = new Subscription();
  isEnabled: boolean = true;

  constructor(
    private taskService: TaskService
  ) {
  }

  ngOnInit() {
    this.isEnabled = !this.task.dependsOn;

    this.subscription = this.taskService.asObservable().subscribe((task) => {
      if(task.id === this.task.id) {
        return;
      }

      if(this.task.dependsOn && this.task.dependsOn === task.id) {
        this.isEnabled = true;
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  doAction() {
    this.taskService.triggerAction(this.task);
  }

}

export class Task {
  id: number;
  title: string;
  actions: () => string;
  childrem: Task[];
  dependsOn?: number
}
