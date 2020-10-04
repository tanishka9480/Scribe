import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CapitalizePipe } from './capitalize.pipe';
import { MenuComponent } from './menu/menu.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';

import {NgxEditorModule} from 'ngx-editor';
import {HttpClientModule} from '@angular/common/http';
import { AuthService } from './auth.service';
import {AngularEditorModule} from '@kolkov/angular-editor';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


let firebaseConfig = {
  apiKey: "AIzaSyBe5v69Qoq5dJQIkbXaywDvpE0wZCMwEP4",
  authDomain: "scribe1-87425.firebaseapp.com",
  databaseURL: "https://scribe1-87425.firebaseio.com",
  projectId: "scribe1-87425",
  storageBucket: "scribe1-87425.appspot.com",
  messagingSenderId: "647302186062",
  appId: "1:647302186062:web:c8948a117f66e3c6d52f1f"
};
firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    CapitalizePipe,
    MenuComponent,
    MyblogsComponent,
    ProfileComponent,
    CreateComponent,
    PostComponent,
    ViewComponent,
    CommentsComponent,
    EditProfileComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    HttpClientModule,
    AngularEditorModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
