import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommunicationServiceService } from '../communication-service.service';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit{

  constructor(private communicationService: CommunicationServiceService) { }

  @Input() parentData!: string;
  @Output() childEvent = new EventEmitter<string>();

  dataFromparent: string = "";

  ngOnInit(): void {
    this.communicationService.messageFromParent.subscribe((data: string) => {
      this.dataFromparent = data;
   });
  }

  sendDataToParent() {
    this.childEvent.emit("Hello Parent, I am child component!");
  }

  sendUsingService() {
    this.communicationService.sendDataToParent("Hello Parent, I am child component using service!");
  }

}


