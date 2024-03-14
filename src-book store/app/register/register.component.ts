import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
firstn:String='';
regis()
{
  console.log("the first name of the user "+this.firstn);
}
}
