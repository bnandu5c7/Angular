import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { LikeDislikeComponent } from './like-dislike/like-dislike.component';
import { CompoundInterestPipe } from './compound-interest.pipe';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { AddfriendComponent } from './addfriend/addfriend.component';
import { ViewfriendComponent } from './viewfriend/viewfriend.component';
import { ShowAllFriendsComponent } from './show-all-friends/show-all-friends.component';
import { ModifyfriendComponent } from './modifyfriend/modifyfriend.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LikeDislikeComponent,
    CompoundInterestPipe,
    FundTransferComponent,
    AddfriendComponent,
    ViewfriendComponent,
    ShowAllFriendsComponent,
    ModifyfriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
