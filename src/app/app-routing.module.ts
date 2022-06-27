import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostsComponent } from './posts/posts.component';
import { ProfileFollowerComponent } from './profile-follower/profile-follower.component';

const routes: Routes = [
  {
      path: "home", 
      component: HomeComponent
    },
    {
      path:"followers" ,
      component: GithubFollowersComponent
    },
    {
      path:"followers/:id/:username",
      component: ProfileFollowerComponent
    },
    {
      path:"posts",
      component: PostsComponent
    },
    {
      path:"**",
      component: PagenotfoundComponent
    },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
