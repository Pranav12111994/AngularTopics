import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageServiceService } from '../Service/message-service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  providers: [MessageServiceService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private message: MessageServiceService) {}
  title = 'services-dependancy-injection';
  greeting: string = '';

  
  ngOnInit(): void {
    this.greeting = 'Pranav '.toLocaleUpperCase() + this.message.getMessage().toLocaleUpperCase();
  }
}
