import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compound'
})
export class CompoundPipe implements PipeTransform {

  transform(p:number,n:number,t:number,r:number): number {

    let c= p*Math.pow((1+r/100),t)-p
    return c;
  }

}
