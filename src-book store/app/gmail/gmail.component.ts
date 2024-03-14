import { Component } from '@angular/core';

@Component({
  selector: 'app-gmail',
  templateUrl: './gmail.component.html',
  styleUrls: ['./gmail.component.css']
})
export class GmailComponent {
userLoggedIn:boolean=false;
x:boolean=false;
y:boolean=false;
in()
{
  if(this.userLoggedIn==false)
  {
    this.userLoggedIn=true;
    console.log("the user logged in");
    this.x=true;
    this.y=false;
  }
}
out()
{
  if(this.userLoggedIn==true)
  {
    this.userLoggedIn=false;
    console.log("the user registered");
     this.x=false;
     this.y=true;
  }
}
}
