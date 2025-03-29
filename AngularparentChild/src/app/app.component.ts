import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponentComponent } from "./parent-component/parent-component.component";
import { ChildComponentComponent } from './child-component/child-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ParentComponentComponent, ChildComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularparentChild';
}
