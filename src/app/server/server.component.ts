import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  variable: string = "Server";
  allowServer: boolean = false;
  serverStatus: string = "No server is created.";
  serverName = "Hello";

  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    }, 3000)
  }

  ngOnInit(): void {
  }

  myFunction = () => {
    return this.variable;
  }

  onAddServer() {
    this.serverStatus = "Server is created.";
  }

  onUpdateServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
