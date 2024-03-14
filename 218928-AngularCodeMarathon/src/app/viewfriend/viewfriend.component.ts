import { Component } from '@angular/core';
import { Friend } from '../Friend';
import { FriendService } from '../friend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewfriend',
  templateUrl: './viewfriend.component.html',
  styleUrls: ['./viewfriend.component.css']
})
export class ViewfriendComponent {

  constructor(private fs:FriendService,private router:Router)
  {

  }
 nameToSearch:String='';
 found!:Friend;
 localView()
 {
  this.found=this.fs.findFriend(this.nameToSearch);
  if(this.found==undefined)
  {
    alert("the friend doesnot exits" +this.nameToSearch);
    this.nameToSearch='';
  }

 }
}
