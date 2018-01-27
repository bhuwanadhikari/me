import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable()
export class HttpService {
  private getBlogsUrl = '/api/blogs';
  private getGalleryUrl = 'api/gphotos'
  constructor(private http: HttpClient) { }
  getBlogs() {
    return this.http.get(this.getBlogsUrl);  // returns an observable that has the data of our own
  }

  getGallery() {
    return this.http.get(this.getGalleryUrl);
  }
}
