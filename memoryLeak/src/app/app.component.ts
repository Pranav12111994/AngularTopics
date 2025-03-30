import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MemoLeakComponent } from "./memo-leak/memo-leak.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MemoLeakComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'memoryLeak';
}
