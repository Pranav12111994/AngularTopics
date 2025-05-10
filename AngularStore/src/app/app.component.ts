import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CounterAction from '../counter.action';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularStore';
  counst$: Observable<number> | undefined;

  constructor(private store: Store<{count: number}>) {
    console.log(CounterAction);
    
    this.counst$ = store.pipe(select('count'));
  }

  increment(): void {
    this.store.dispatch(CounterAction.increment());
  }

  decrement(): void {
    this.store.dispatch(CounterAction.decrement());
  }

  reset(): void {
    this.store.dispatch(CounterAction.reset());
  }


}
