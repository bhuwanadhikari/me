import {Component, OnInit} from '@angular/core';

interface UserResponse {
  login: string;
  bio: string;
  location: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  thisYear: number;

  constructor() {
    this.thisYear = new Date().getFullYear();
  }
  ngOnInit() {  }
}
