import { Component, OnInit, Input } from '@angular/core';
import { BlogsComponent} from '../blogs.component';
import { Blog } from '../blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  inputs: ['blog']
})
export class BlogComponent implements OnInit {

  testUrl = 'https://static.pexels.com/photos/382177/pexels-photo-382177.jpeg';
  constructor() { }
  ngOnInit() {
  }

}
