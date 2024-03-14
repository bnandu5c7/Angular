import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'armstrong'
})
export class ArmstrongPipe implements PipeTransform {

  transform(val:number,arm:boolean=false): boolean {
    let temp=val;
    let res=0;
    while(temp!=0)
    {
      let r=temp%10;
      res+=Math.pow(r,3);
      temp=Math.floor(temp/10);
    }
    let y=arm=res==val;
    if(y==true)
    {
      console.log( val +"armstrong number");
    }
    else{
      console.log(val+"not armstrong number");
    }
     return y;
  }

}
