import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { BadRequest } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[] = [];
  
  post={
    id: 0,
    title: '',
    body: '',
    userId: 0
  }

  status=true;

  constructor(private postService: PostService) {
    
   }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts(){
    this.postService.getData()  
        .subscribe(post => {
          (this.posts as object) = post
          this.posts.unshift(post)
        })
  }

  createPost(){
    this.postService.create(this.post)
             .subscribe(
               () =>{
                //this.post.id = response.id
                this.posts.unshift(this.post);
                this.post={
                  id: 0,
                  title: '',
                  body: '',
                  userId: 0
                }
             });
  }

  editPost(postForm:any){
    this.post = postForm;
    this.status=false;
}

  updatePost(){
    this.postService.update(this.post)
      .subscribe(response =>{
        this.post={
          id: 0,
          title: '',
          body: '',
          userId: 0
        }
        this.status=true;
      })
}
  deletePost(post:any){
    this.postService.delete(123)
        .subscribe(
          () => {
            let index = this.posts.indexOf(post);
            this.posts.splice(index, 1)
        })
  }

}
