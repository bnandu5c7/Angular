import { Component } from '@angular/core';
import { SavingsAccount } from './SavingsAccount';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent {
source:SavingsAccount={accountNumber:701,accountHolder:"Nandini Reddy",accountBalance:85000};
target:SavingsAccount={accountNumber:801,accountHolder:"Harshana Reddy",accountBalance:90000};
amountToTransfer:number=0;
message:String='';
tLable="style3"
transaction()
{
  if(this.amountToTransfer<0)
  {
    this.message="sorry !! You can't enter negative value";
  }
  else if(this.source.accountBalance<this.amountToTransfer)
  {
    this.message="ohh No !! insufficient balance";
  }
  else{
    this.source.accountBalance-=this.amountToTransfer;
    this.target.accountBalance+=this.amountToTransfer;
    this.message="transaction successfull";
    console.log("The source account  "+ this.source.accountHolder + "  current balance after transaction is " +this.source.accountBalance);
    console.log("The target  account  "+ this.target.accountHolder + " current balance after transaction is " +this.target.accountBalance);
  }
}
}
