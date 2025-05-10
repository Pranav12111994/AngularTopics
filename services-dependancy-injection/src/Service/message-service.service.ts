import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor() { }

  getMessage() {
    return 'good morning';
  }
}
