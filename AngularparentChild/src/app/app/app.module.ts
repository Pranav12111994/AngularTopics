import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationServiceService } from '../communication-service.service';



@NgModule({
  providers: [CommunicationServiceService],
  imports: [
    CommonModule
  ]
})
export class AppModule { }
