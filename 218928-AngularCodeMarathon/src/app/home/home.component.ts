import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
isUserLogged:boolean=false;
m:boolean=false;
n:boolean=false;
in()
{
  if(this.isUserLogged==false)
  {
    this.isUserLogged=true;
    console.log("user logged in");
    this.m=true;
    this.n=false;
  }
}
reg()
{
  if(this.isUserLogged==true)
  {
    this.isUserLogged=false;
    console.log("currently user is in registration page");
    this.m=false;
    this.n=true;
  }
}
}
