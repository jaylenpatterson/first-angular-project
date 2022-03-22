import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: '/servers.component.html',
  styleUrls: ['./servers.component.css'],
  styles: [`
  
  .past5 {
    color:white;
  }
  `]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created'
  serverName = 'Testserver';
  serverCreated = false;
  displayDetails = false;
  servers = ['Testserver', 'Testserver 2'];
  log = []

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onDisplayDetails() {
    if (this.displayDetails === false) {
      this.log.push(new Date())
      return this.displayDetails = true;
    }

    this.log.push(new Date())
    this.displayDetails = false;
  }


}
