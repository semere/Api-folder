import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable({providedIn: 'root'})
export class PostService {

constructor(private http: HttpClient) {}
    createGeneralPost(title: string, content:string) {
        const postData: Post = {title: title, content:content}
        this.http
        .post<{ name: string}>(
          'https://angular-fcf5d-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
          postData
        )
        .subscribe(responseData => {
          console.log(responseData);
        });
    }

    fetchPosts() {
        return this.http
          .get<{ [key: string]: Post }>('https://angular-fcf5d-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
          .pipe(
            map(responseData  => {
              const postsArray: Post[] = [];
              for (const key in responseData) {
                if (responseData.hasOwnProperty(key)) {
                  postsArray.push({ ...responseData[key], id: key });
                }
              }
              return postsArray;
            })
          )
      }
      clearPosts(){
          return this.http.delete('https://angular-fcf5d-default-rtdb.europe-west1.firebasedatabase.app/posts.json');
      }
}