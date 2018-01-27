import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showcaseImagePath: string;
  myLocation: string;
  myPhone: number;
  myEmail: string;

  thisYear: string;
  constructor() {
    this.showcaseImagePath = 'assets/img/myShowcase.jpeg';
    this.myLocation = 'Pokhara Nepal';
    this.myPhone = +9779860541599;
    this.myEmail = 'lorem@ipsum@gmail.com';

  }

  ngOnInit() {
  }

}
