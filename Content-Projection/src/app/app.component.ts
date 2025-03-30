import { Component, TemplateRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./child/child.component";
import { CommonModule } from '@angular/common';
import { ProductcardComponent } from "./productcard/productcard.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildComponent, CommonModule, ProductcardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Flag to toggle which template is shown
  showFirstTemplate = true;
  shouldShow = true;

  // Template references captured using ViewChild
  @ViewChild('firstTemplate', { static: true })
  firstTemplate!: TemplateRef<any>;

  @ViewChild('secondTemplate', { static: true })
  secondTemplate!: TemplateRef<any>;

  // Getter to return the current template based on the flag
  get currentTemplate(): TemplateRef<any> {
    return this.showFirstTemplate ? this.firstTemplate : this.secondTemplate;
  }

  toggleTemplate() {
    this.showFirstTemplate = !this.showFirstTemplate;
  }
}
