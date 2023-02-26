import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../service/post.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  messageErr: any;
  message: any;
  post: Post[] = [];
  currentpost:any
  submitted = false;
  datapost: Post = {
    id: '',
    titre: '',
    contenu: '',
  };

  constructor(public Ps: PostService) {}

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.Ps.GetAllPosts().subscribe(
      (data) => {
        this.post = data;
      },
      (err: HttpErrorResponse) => {
        this.messageErr = err.error;
      }
    );
  }

  savePost(): void {
    const data = {
      titre: this.datapost.titre,
      contenu: this.datapost.contenu,
    };

    this.Ps.AddPost(data).subscribe({
      next: (res) => {
        this.ngOnInit();
        this.submitted = true;
      },
      error: (e) => console.error(e),
    });
  }

  newPost(): void {
    this.submitted = false;
    this.datapost = {
      id: '',
      titre: '',
      contenu: '',
    };
  }
  Rest(){
    this.messageErr= '';
    this.message= '';
    this.currentpost= '';
    this.submitted = false;
    this.datapost.titre='';
    this.datapost.contenu=''
  }

  getPostId(id:any){
this.currentpost=id

  }

  deletePost(): void {
    this.Ps.DeletetPost(this.currentpost)
      .subscribe({
        next: (res) => {
          this.ngOnInit()
        },
        error: (e) => console.error(e)
      });
  }

  getPostToModifier(id:any,titre:any,contenu:any){
    this.datapost.id=id;
    this.datapost.titre=titre;
    this.datapost.contenu=contenu;
  }

  updatePost(up:any): void {
    this.message = '';

    this.Ps.ModifierPost(this.datapost.id,up.value)
      .subscribe({
        next: (res) => {
          this.ngOnInit();
          this.message = res.message ? res.message : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }


  }

