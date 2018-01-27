import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BlogsComponent } from './blogs/blogs.component';
import { PfComponent } from './pf/pf.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AmComponent } from './am/am.component';
import { TweetsComponent } from './tweets/tweets.component';
import { HomeComponent } from './home/home.component';
import { routesModule } from './app.routes'; /*adding the custom routesModule*/
import { GobackComponent } from './goback/goback.component';
import { ReactionComponent } from './reaction.component';
import { HttpClientModule} from '@angular/common/http';
import { BlogComponent } from './blogs/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    PfComponent,
    GalleryComponent,
    AmComponent,
    TweetsComponent,
    HomeComponent,
    GobackComponent,
    ReactionComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    routesModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
