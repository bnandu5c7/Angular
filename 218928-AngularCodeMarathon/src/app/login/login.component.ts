import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
userName:String='';
userMail:String='';
sLable="style2";
log()
{
  console.log("user logged successfully");
  console.log("the user name is "+this.userName);
  console.log("the user mail id is " +this.userMail);
}
}
