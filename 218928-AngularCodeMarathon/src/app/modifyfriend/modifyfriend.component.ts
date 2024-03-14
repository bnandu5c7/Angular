import { Component } from '@angular/core';
import { FriendService } from '../friend.service';
import { Router } from '@angular/router';
import { Friend } from '../Friend';

@Component({
  selector: 'app-modifyfriend',
  templateUrl: './modifyfriend.component.html',
  styleUrls: ['./modifyfriend.component.css']
})
export class ModifyfriendComponent {
constructor(private fs:FriendService,private router:Router)
{

}
eobj:Friend=new Friend();
isupdated!:boolean;
localModify()
{
  console.log("modifying the friend  "+this.eobj);
  this.isupdated=this.fs.updateFriend(this.eobj);
  if(this.isupdated==true)
  {
    alert("the friend update");
  }
  else{
    console.log("the friend does not exist"+this.eobj.name);
  }
}
}
