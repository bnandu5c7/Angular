import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squareRoot'
})
export class SquareRootPipe implements PipeTransform {

  transform(val:number): number{
    let s =Math.sqrt(val);
    return s;
  }

}
