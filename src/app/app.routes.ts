import {HomeComponent} from './home/home.component';
import {BlogsComponent} from './blogs/blogs.component';
import {GalleryComponent} from './gallery/gallery.component';
import {PfComponent} from './pf/pf.component';
import {AmComponent} from './am/am.component';
import {TweetsComponent} from './tweets/tweets.component';
import { RouterModule} from '@angular/router';

const APP_ROUTES = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'blogs', component: BlogsComponent
  },
  {
    path: 'gallery', component: GalleryComponent
  },
  {
    path: 'pf', component: PfComponent
  },
  {
    path: 'am', component: AmComponent
  },
  {
    path: 'tweets', component: TweetsComponent
  },
  ];


/*Exporting all routes to the appModule assigning it to he const routes*/
export const routesModule = RouterModule.forRoot(APP_ROUTES);
