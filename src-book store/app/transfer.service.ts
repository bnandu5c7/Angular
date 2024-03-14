import { Injectable } from '@angular/core';
import { Bank } from './transfer/Bank';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor() { }
  transferfun(source:Bank,target:Bank,amountToTransfer:number)
  {
     source.accountBalance-=amountToTransfer;
     target.accountBalance+=amountToTransfer;
  }
}
