import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    AddUserComponent,
    EditUserComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
// import { NgSelectModule } from '@ng-select/ng-select';
// import { AppComponent } from './app.component';
// import { AllUsersComponent } from './all-users/all-users.component';
// import { AddUserComponent } from './add-user/add-user.component';
// import { EditUserComponent } from './edit-user/edit-user.component';
// import { ViewUserComponent } from './view-user/view-user.component';
// import { UserService } from './user.service';
// import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { SearchPipe } from './search.pipe';
// import { PaginationComponent } from './pagination/pagination.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     AllUsersComponent,
//     AddUserComponent,
//     EditUserComponent,
//     ViewUserComponent,
//     ConfirmationModalComponent,
//     SearchPipe,
//     PaginationComponent
//   ],
//   imports: [
//     BrowserModule,
//     HttpClientModule,
//     FormsModule,
//     ReactiveFormsModule,
//     RouterModule.forRoot([
//       { path: '', redirectTo: 'users', pathMatch: 'full' },
//       { path: 'users', component: AllUsersComponent },
//       { path: 'users/add', component: AddUserComponent },
//       { path: 'users/edit/:id', component: EditUserComponent },
//       { path: '**', redirectTo: 'users' }
//     ]),
//     NgSelectModule,
//     NgbModule
//   ],
//   providers: [UserService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
