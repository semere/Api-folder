import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostService } from './post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-api';
  loadedPosts: Post[] = [];
  isFetching = false;

  constructor(private http: HttpClient, private postService: PostService) {};

  ngOnInit() {
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    });
  }
  
    onCreatePost(postData: Post) {
      this.postService.createGeneralPost(postData.title, postData.content);
    }
  
  onFetchPosts() {
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    });
  }

  onClearPosts() {
    this.postService.clearPosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }
}
