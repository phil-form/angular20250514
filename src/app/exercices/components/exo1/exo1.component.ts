import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-exo1',
  standalone: false,
  templateUrl: './exo1.component.html',
  styleUrl: './exo1.component.scss'
})
export class Exo1Component implements OnInit {
  timer: number = 0;
  interval: any;
  isRunning: boolean = false;

  ngOnInit() {
  }

  startTimer() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.interval = setInterval(() => {
        this.timer++;
      }, 1000);
    }
  }

  stopTimer() {
    if (this.isRunning) {
      clearInterval(this.interval);
      this.isRunning = false;
    }
  }

  resetTimer() {
    this.stopTimer();
    this.timer = 0;
  }
}
