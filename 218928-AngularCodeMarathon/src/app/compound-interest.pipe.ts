import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compoundInterest'
})
export class CompoundInterestPipe implements PipeTransform {

  transform(p:number,r:number,n:number,t:number): number{
    let intrest=p*Math.pow((1+r/100),t)-p;
    return intrest;
  }

}
