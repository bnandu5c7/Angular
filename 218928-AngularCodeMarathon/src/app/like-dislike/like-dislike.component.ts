import { Component } from '@angular/core';

@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.css']
})
export class LikeDislikeComponent {
lLable="Like";
lCount:number=1;
lStyle="style1";
dLable="DisLike";
dCount:number=1;
dStyle="style2";
likeFun()
{
  if(this.lCount<100)
  {
    this.lCount++;
    console.log("user liked ");
  }
  else{
    this.lCount=1;
  }
}
DisLikeFun()
{
  if(this.dCount<20)
  {
    this.dCount++;
    console.log("user disliked");
  }
  else{
    this.dCount=1;
  }
}
}
