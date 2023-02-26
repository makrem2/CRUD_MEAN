import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const urlposts = 'http://localhost:8080/api/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public httpclient: HttpClient) {}

  AddPost(data: any): Observable<any> {
    return this.httpclient.post(urlposts, data);
  }

  ModifierPost(id: any, data: any): Observable<any> {
    return this.httpclient.put(`${urlposts}/${id}`, data);
  }

  DeletetPost(id: any): Observable<any> {
    return this.httpclient.delete(`${urlposts}/${id}`);
  }

  GetAllPosts(): Observable<Post[]> {
    return this.httpclient.get<Post[]>(urlposts);
  }

  GetPostById(id: any): Observable<any> {
    return this.httpclient.get(`${urlposts}/${id}`);
  }

  // getTousPost():Observable<any>
  // {
  //   let url =this.urlposts+"/get-all"
  //    return this.httpclient.get<any>(url).pipe(
  //     map((response:any) => response as any)
  //   );;
  // }


  // addPost(post: Post) {
  //   return this.httpclient.post<any>(this.urlposts,post);
  // }

 /* posts: Post[] = [
    new Post('1', 'Post 1', 'content du post 1'),
    new Post('2', 'Post 2', 'content du post 2'),
    new Post('3', 'Post 3', 'content du post 3'),
    new Post('4', 'Post 4', 'content du post 4')
  ];


  constructor(public http: HttpClient) {}
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.BasedUrl}/po/`);
  }

 // getPosts() {
   // return this.posts;
  //}

  getPost(id: string) {
    return this.posts.find(post => post._id === id);
  }

  addPost(post: Post) {
    this.posts.push(post);
  }

  updatePost(post: Post) {
    const index = this.posts.findIndex(p => p._id === post._id);
    this.posts[index] = post;
  }

  deletePost(id: string) {
    this.posts = this.posts.filter(post => post._id !== id);
  }*/
}

