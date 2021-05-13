import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  variable: string = "Server";

  myFunction() {
    return this.variable;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
