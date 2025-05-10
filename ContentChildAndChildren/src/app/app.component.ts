import { AfterContentInit, Component, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./child/child.component";
import { ParentComponent } from "./parent/parent.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildComponent, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'ContentChildAndChildren';
  

}
