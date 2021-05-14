import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  variable: string = "Server";
  allowServer: boolean = false;

  myFunction = () => {
    return this.variable;
  }

  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    }, 3000)
  }

  ngOnInit(): void {
  }

}
