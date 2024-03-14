import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
name:String='';
email:String='';
address:String='';
mobile:String='';
styleLbl="style1";
out()
{
  console.log("user is in register page ");
  console.log("user name is  "+this.name);
  console.log("user mail is "+this.email);
  console.log("user address is "+this.address);
  console.log("user mobile number is  "+this.mobile);
}
}
