import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private cdr: ChangeDetectorRef) {}
  title = 'ChangeDetection';
  counter = 0;

  increment(){
    this.counter++;
  }

  asyncIncrement() {
    setTimeout(() => {
      this.counter++;
      this.cdr.markForCheck()
    }, 2000);
  }

  manualDetect() {
    this.counter++;
    this.cdr.detectChanges();
  }


}
