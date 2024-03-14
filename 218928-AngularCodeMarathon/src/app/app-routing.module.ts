import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfriendComponent } from './addfriend/addfriend.component';
import { ViewfriendComponent } from './viewfriend/viewfriend.component';
import { ShowAllFriendsComponent } from './show-all-friends/show-all-friends.component';
import { ModifyfriendComponent } from './modifyfriend/modifyfriend.component';

const routes: Routes = [
  
    { path:'', component: AddfriendComponent},
    { path:'AddFriend', component: AddfriendComponent},
    { path:'ViewFriend', component:ViewfriendComponent },
    { path:'showAllFriends', component:ShowAllFriendsComponent },
    { path:'ModifyFriend', component:ModifyfriendComponent }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
