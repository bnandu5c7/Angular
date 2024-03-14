import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compound'
})
export class CompoundInterestPipe implements PipeTransform {

  // transform(first:number,...args:number[]): number {
  //   let sum=first;
  //   for(let i=0;i<args.length;i++)
  //   {
  //     sum+=args[i];
  //   }
  //   return sum/(1+args.length)
  // }
  transform(p:number,t:number,n:number,r:number):number{
    let ci=p*Math.pow((1+r/100),t)-p;
    return ci;
  }

}
