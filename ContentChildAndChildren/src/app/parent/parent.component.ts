import { Component, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  @ContentChild(ChildComponent) firstChild!: ChildComponent;
  @ContentChildren(ChildComponent) childrenList!: QueryList<ChildComponent>;

  ngAfterContentInit() {
    console.log('ngAfterContentInit in ParentComponent');
    console.log('First Child:', this.firstChild);
    console.log('All Children:', this.childrenList.toArray());
  }
}
