import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root' // Makes the service available application-wide
})
export class CommunicationServiceService {
  private messageSource = new Subject<string>();
  messageToChind = this.messageSource.asObservable();

  private MessageToChild = new Subject<string>();
  messageFromParent = this.MessageToChild.asObservable();
  
  sendDataToParent(message: string) {
    this.messageSource.next(message);
  }

  sendDataToChild(fromParent: string) {
    this.MessageToChild.next(fromParent);
  } 
}