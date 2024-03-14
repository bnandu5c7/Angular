import { Component } from '@angular/core';
import { Bank } from './Bank';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {
source:Bank={accountId:3,accountName:"harsha",accountBalance:80000};
target:Bank={accountId:4,accountName:"nandu",accountBalance:75000};
amountToTransfer:number=0;
message:String='';
constructor(private ts:TransferService)
{
}
localFun()
{ 
  if(this.amountToTransfer<0)
  {
    this.message="you cant't enter the negative number";
  }
  else if(this.amountToTransfer>this.source.accountBalance)
  {
    this.message=" sorry!! you have insufficient balance";
  }
  else{
    this.source.accountBalance-=this.amountToTransfer;
    this.target.accountBalance+=this.amountToTransfer;
    console.log("the source account holder "+this.source.accountName+" has balance "+this.source.accountBalance);
    console.log("the target account holder "+this.target.accountName+" has balance "+this.target.accountBalance);
  }

}
transferfun1()
{
  this.ts.transferfun(this.source,this.target,this.amountToTransfer);
}
}
