import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-api';
  loadedPosts = [];

  constructor() {};

  onSubmit(value: any) {
    console.log(value);
  }

  ngOnInit() {}

  onCreatePost(postData: { title: string; coments: string}) {
    console.log(postData);
  }

  
}
