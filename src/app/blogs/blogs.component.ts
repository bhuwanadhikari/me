import { Component, OnInit, EventEmitter } from '@angular/core';
import { Blog } from './blog';
import { BlogComponent} from './blog/blog.component';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
  providers: [HttpService]
})
export class BlogsComponent implements OnInit {
  public SelectBlog = new EventEmitter();
  public selectedBlog: Blog;
  public activeBlog: number;

  blogs: any;

  /*blogs: Blog[] = [
    {'_id': '1',
      'title': 'Lukamari with the nature of Pokhara',
      'imageUrl': 'https://static.pexels.com/photos/382177/pexels-photo-382177.jpeg',
      'body': 'this is hte body from front end',
      'likes': 5,
      'dislikes': 1
    },
    {
      "title": "Puzzling alk Maths",
      "imageUrl": "https://static.pexels.com/photos/691039/pexels-photo-691039.jpeg",
      "body": "this is hte math from front end",
      "likes": 2,
      "dislikes": 1
    },
    {
      "title": "Living in lkajkjdf",
      "imageUrl": "https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000341319362-e1501169182519.jpg?strip=all&w=960",
      "body": "this is hte living from front end",
      "likes": 6,
      "dislikes": 1
    },
    {
      "title": "Tralksdade PUtin is",
      "imageUrl": "google.com",
      "body" : "this is hte putin from front end",
      "likes": 8,
      "dislikes": 1
    }
  ];*/
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getBlogs().subscribe((blogItems) => this.blogs = blogItems );
  }
  onSelect(bl: Blog, i: number) {
    this.selectedBlog = bl;
    this.activeBlog = i;
  }

}
