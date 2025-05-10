import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, DoCheck, OnDestroy{
  title = 'LifeCycleHooks';
  userName: string = 'Pranav';
  isChildDestroyed: boolean = false;

  ngOnInit(): void {
    console.log('ngOnInit called: parent component');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called: parent component');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called: parent component');
    this.isChildDestroyed = true;
  }

  updateUser() {
    this.userName = 'Rugved';
  }

  destroyComponent() {
    this.isChildDestroyed = true;
  }

}
