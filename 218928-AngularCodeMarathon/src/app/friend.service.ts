import { Injectable } from '@angular/core';
import { Friend } from './Friend';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor() { }
  fobj:Friend[]=[
    {name:"harsha",place:"hyd",age:21,qualification:"B-Tech"},
    {name:"nandu",place:"pune",age:22,qualification:"degree"},
    {name:"srinika",place:"banglore",age:23,qualification:"B.com"},
    {name:"sri",place:"mumbai",age:22,qualification:"BSc"},

  ]
  getAllFriends():Friend[]
  {
    console.log("getting all the friend records"+this.fobj);
    return this.fobj;
  }
  addAfriend(aobj:Friend)
  {
    console.log("adding new friend"+aobj);
    this.fobj.push(aobj);
  }
  updateFriend(uobj:Friend):boolean{
    console.log('Editing a  friend...',uobj);
    for (let x of this.fobj) { 
      if (x.name == uobj.name) { 
          this.fobj.splice(this.fobj.indexOf(x), 1);
          this.fobj.push(uobj);
          return true;
      }      
    }
    return false;
  }
  findFriend(nameToFind:String) : Friend {
    console.log('Finding an existing friend name : '+nameToFind);
   
    let friendFound!:Friend;
    
    for (let i = 0; i< this.fobj.length; i++) {
      const y = this.fobj[i];
      if(y.name ==nameToFind) { 
        friendFound = y;
        break;
      }
    }
    return friendFound;
  }
}
