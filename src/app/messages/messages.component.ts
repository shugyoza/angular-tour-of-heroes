import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.sass']
})
export class MessagesComponent implements OnInit {
  // to be able to bind it into the template, the service must be public
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
