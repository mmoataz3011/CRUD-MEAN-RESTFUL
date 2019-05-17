import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes, Router } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

//For proxy config
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
//services
import { UserService } from './services/user.service';
//forms Module
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './components/user/user.component';

const appRoutes:Routes=[
  {path:'',component:UserComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },UserService],
  bootstrap: [AppComponent]
})

export class AppModule { 

  

}
