import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewAllBooksComponent } from './view-all-books/view-all-books.component';
import { ViewSingleBookComponent } from './view-single-book/view-single-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GmailComponent } from './gmail/gmail.component';
import { HappySadComponent } from './happy-sad/happy-sad.component';
import { CompoundInterestPipe } from './compound-interest.pipe';
import { CompoundPipe } from './compound.pipe';
import { SquareRootPipe } from './square-root.pipe';
import { ArmstrongPipe } from './armstrong.pipe';
import { TransferComponent } from './transfer/transfer.component';
const appRoutes:Routes=[
  { path:'add-book',component: AddBookComponent},
  { path:'edit-book',component:EditBookComponent },
  { path:'view-single-book',component: ViewSingleBookComponent},
  { path:'view-all-books',component: ViewAllBooksComponent},
  { path:'delete-book',component: DeleteBookComponent}  
  ]

@NgModule({
  declarations: [
    AppComponent,
    ViewAllBooksComponent,
    ViewSingleBookComponent,
    AddBookComponent,
    DeleteBookComponent,
    EditBookComponent,
    LoginComponent,
    RegisterComponent,
    GmailComponent,
    HappySadComponent,
    CompoundInterestPipe,
    CompoundPipe,
    SquareRootPipe,
    ArmstrongPipe,
    TransferComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
