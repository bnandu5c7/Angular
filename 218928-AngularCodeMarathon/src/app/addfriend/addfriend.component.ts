import { Component } from '@angular/core';
import { FriendService } from '../friend.service';
import { Router } from '@angular/router';
import { Friend } from '../Friend';

@Component({
  selector: 'app-addfriend',
  templateUrl: './addfriend.component.html',
  styleUrls: ['./addfriend.component.css']
})
export class AddfriendComponent {
constructor(private fs:FriendService,private router:Router )
{

}
obj: Friend=new Friend();
localAdd()
{
  console.log("adding new friend"+this.obj)
  this.fs.addAfriend(this.obj);
  alert("friend added successfully ");
}
}
