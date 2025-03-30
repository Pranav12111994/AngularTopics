import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit,OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input() userName: string = '';
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called', changes);
    console.log('current value',changes['userName'].currentValue);
    console.log('previous value',changes['userName'].previousValue);
  }

  ngOnInit(): void {
    console.log('ngOnInit called: child component');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called: child component', this.content);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called: child component', this.content);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called: child component', this.wrapper);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called: child component');
  }

}
