import { Component, OnInit } from '@angular/core';
import { ChildComponentComponent } from "../child-component/child-component.component";
import { CommunicationServiceService } from '../communication-service.service';

@Component({
  selector: 'app-parent-component',
  imports: [ChildComponentComponent],
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.css'
})
export class ParentComponentComponent implements OnInit{
  constructor(private communicationService: CommunicationServiceService) {}
  messageToChild: string = "Hello from parent";
  messageFromChild: string = "";
  messageFromService: string = "";

  ngOnInit() {
    this.communicationService.messageToChind.subscribe((data: string) => {
      this.messageFromService = data;
    } );
  }

  handleChildEvent(data: string) {
    this.messageFromChild = data;
  }

  sendusingService() {  
    this.communicationService.sendDataToChild("Hello from Parent using service!");
  } 


}
