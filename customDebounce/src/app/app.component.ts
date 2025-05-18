import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DebounceTestComponent } from "./debounce-test/debounce-test.component";

@Component({
  selector: 'app-root',
  imports: [DebounceTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'customDebounce';
}
