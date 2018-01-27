import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reaction',
  template: `
    <div class="reaction">
      <div id="like">Like</div>
      <div id="dislike">Dislike</div>
    </div>
  `,
  styles: [`
    .reaction {
      display: block;
      margin: auto;
      width: 200px;
      height: 50px;
      text-align: center;
    }
    .reaction div{
      height: 25px;
      width: 100px;
      float: left;
    }
    #like {}
    #dislike{}
  `]
})
export class ReactionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
