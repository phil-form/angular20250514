import { Component } from '@angular/core';
import {Task} from './components/embedded/embedded.component';

@Component({
  selector: 'app-demo-subjects',
  standalone: false,
  templateUrl: './demo-subjects.component.html',
  styleUrl: './demo-subjects.component.scss'
})
export class DemoSubjectsComponent {
  tasks: Task[] = [
    {
      id: 1,
      title: 'Task 1',
      actions: () => 'Action 1',
      childrem: [
        {
          id: 2,
          title: 'Task 1.1',
          actions: () => 'Action 1.1',
          childrem: [
            {
              id: 3,
              title: 'Task 1.1.1',
              actions: () => 'Action 1.1.1',
              childrem: [
                {
                  id: 4,
                  title: 'Task 1.1.1.1',
                  actions: () => 'Action',
                  childrem: []
                },
              ]
            },
          ]
        },
        {
          id: 5,
          title: 'Task 1.2',
          actions: () => 'Action 1.2',
          childrem: []
        }
      ],
    },
    {
      id: 6,
      title: 'Task 2',
      actions: () => 'Action 2',
      childrem: [
        {
          id: 7,
          title: 'Task 2.1',
          actions: () => 'Action 2.1',
          childrem: []
        }
      ],
      dependsOn: 4,
    },
    {
      id: 8,
      title: 'Task 3',
      actions: () => 'Action 3',
      childrem: []
    }
  ];


}
