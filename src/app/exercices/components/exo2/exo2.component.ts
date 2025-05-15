import { Component } from '@angular/core';
import {Link} from '../../models/link.model';

@Component({
  selector: 'app-exo2',
  standalone: false,
  templateUrl: './exo2.component.html',
  styleUrl: './exo2.component.scss'
})
export class Exo2Component {
  navigation: Link[] = [
    {
      title: 'Home',
      url: '/home',
      isVisible: true,
    },
    {
      title: 'Demo',
      url: '/demo',
      isVisible: true,
    },
    {
      title: 'Exercices',
      url: '/exo',
      isVisible: true,
      children: [
        {
          title: 'Exercice 1',
          url: '/exo/exo1',
          isVisible: true,
        },
        {
          title: 'Exercice 2',
          url: '/exo/exo2',
          isVisible: true,
        },
        {
          title: 'Exercice 3',
          url: '/exo/exo3',
          isVisible: true,
        },
      ]
    }
  ]
}
