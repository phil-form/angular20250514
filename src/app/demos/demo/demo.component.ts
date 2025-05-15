import { Component } from '@angular/core';
import {DemoService} from '../../services/demo.service';

@Component({
  selector: 'app-demo',
  standalone: false,
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent {
  demoText = 'DEMO !!!';
  constructor(
    private demoService: DemoService,
  )
  {}

  getTextFromDemoService() {
    this.demoText = this.demoService.getDemoText();
  }
}
