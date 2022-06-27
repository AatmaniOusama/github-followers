import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers-service.service';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  constructor(public service: GithubFollowersService) { }

  ngOnInit(): void {
    this.getFollowers()
  }

  followers:any[] = [];

  getFollowers(){
    this.service.getData()
        .subscribe(follower=>{
          (this.followers as Object) = follower;
        },err=>{
          alert('error')
        })  
  }
}
