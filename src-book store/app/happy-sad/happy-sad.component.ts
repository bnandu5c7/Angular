import { Component } from '@angular/core';

@Component({
  selector: 'app-happy-sad',
  templateUrl: './happy-sad.component.html',
  styleUrls: ['./happy-sad.component.css']
})
export class HappySadComponent {
  hLable="Happy";
  hCount:number=1;
  hStyle="style1";
  sLable="sad";
  sCount:number=1;
  sStyle="style2"
  hap()
  {
    if(this.hCount<10)
    {
      this.hCount++;
    }
    else{
      this.hCount=1;
    }
  }
  sadd()
  {
    if(this.sCount<15)
    {
      this.sCount++;
    }
    else{
      this.sCount=1;
    }
  }

}
