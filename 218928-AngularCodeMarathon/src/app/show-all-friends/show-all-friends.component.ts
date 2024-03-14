import { Component } from '@angular/core';
import { FriendService } from '../friend.service';
import { Router } from '@angular/router';
import { Friend } from '../Friend';

@Component({
  selector: 'app-show-all-friends',
  templateUrl: './show-all-friends.component.html',
  styleUrls: ['./show-all-friends.component.css']
})
export class ShowAllFriendsComponent {
constructor(private fs:FriendService,private router:Router)
{

}
allFriends!:Friend[];
localAllView()
{
  this.allFriends=this.fs.getAllFriends();
}
}
