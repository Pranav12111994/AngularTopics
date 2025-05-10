import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-memo-leak',
  imports: [],
  templateUrl: './memo-leak.component.html',
  styleUrl: './memo-leak.component.css'
})
export class MemoLeakComponent implements OnInit, OnDestroy {

  constructor(private router: Router) {}
  private timerSubscription!: Subscription;
  ngOnInit(): void {
    this.timerSubscription = interval(1000).subscribe((val) => {
      console.log('ticke', val);
    });
  }

  navigateToHome() {
    this.router.navigate(['']);
  }

  ngOnDestroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe()
    }
  }


}
