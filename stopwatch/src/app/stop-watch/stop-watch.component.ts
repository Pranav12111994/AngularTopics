import { Component, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-stop-watch',
  imports: [],
  templateUrl: './stop-watch.component.html',
  styleUrl: './stop-watch.component.css'
})
export class StopWatchComponent implements OnDestroy {
  time = 0;
  private timerSubscription!: Subscription;
  isRunning = false;
  isPause = false;

  start(): void {
    if(!this.isRunning) {
      this.isRunning = true;
      this.isPause = false;
      this.timerSubscription = interval(1000).subscribe(() => {
        this.time++;
      });
    }
  }

  pause(): void {
    if (this.isRunning && !this.isPause) {
      this.isPause = true;
      this.timerSubscription.unsubscribe();
    }
  }

  resume(): void {
    if (this.isPause && this.isRunning) {
      this.isPause = false;
      this.timerSubscription = interval(1000).subscribe(() => {
        this.time++;
      });
    }
  }

  stop(): void {
    if (this.isRunning) {
      this.isRunning = false;
      this.isPause = false;
      this.timerSubscription.unsubscribe();
      this.time = 0;
    }
  }

  ngOnDestroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

}
