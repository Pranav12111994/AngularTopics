import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpComponentComponent } from './http-component/http-component.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularHTTP_Request';
}
