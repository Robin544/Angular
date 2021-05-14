import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  .online {
    font-size: 34px;
  }
  `],
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  variable: string = "Server";
  allowServer: boolean = false;
  serverStatus: string = "No server is created.";
  serverName = "Hello";
  showServerName = false;
  color: string = "#000000";
  isOnline: boolean = false;
  servers: string[] = ["server 1", "server 2", "server 3", "server 4", "server 5"];

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
    this.showServerName = true;
    this.serverStatus = "Server is created.";
  }

  onUpdateServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  setOnline() {
    this.isOnline = !this.isOnline;
  }

}
