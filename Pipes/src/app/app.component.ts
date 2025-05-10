import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CamelcasePipe } from './camelcase.pipe';
import { PurePipePipe } from "./pure-pipe.pipe";
import { FormsModule } from '@angular/forms';
import { ImpurePipePipe } from "./impure-pipe.pipe";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, CamelcasePipe, PurePipePipe, FormsModule, ImpurePipePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pipes';
  textToUpperCase: string = 'hello world app';
  customPipeText: string = 'hello world from custom pipe';

  items: string[] = ['apple', 'banana', 'orange', 'grape'];
  searchTerm: string = '';
}
