import { NgModule } from '@angular/core';
//-----route modul is importnt for routing file
import { Routes, RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';
//===import all your componenet
import { HomeComponent } from './home/home.component';     
import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';
import { AboutComponent } from './about/about.component';  
import { ValidationTestComponent } from './validation-test/validation-test.component'; 
import { AppTestComponent } from './app-test/app-test.component'; 
import { LoginComponent } from './login/login.component';
import {CommonService} from './common.service';
import {CanActivate} from "@angular/router";
import { AddListComponent } from './add-list/add-list.component';  
class AlwaysAuthGuard implements CanActivate {
  canActivate() {
    return true;
  }
}

/* this file for the routing of our project*/
@Injectable()
// this function for the route gard protect from thre unregiister  unlogin userService
class OnlyLoggedInUsersGuard implements CanActivate { 
  constructor(private userService: CommonService) {} 
  canActivate() {
    if (sessionStorage.getItem("login") == "true") { 
      return true;
    } else {
      window.alert("You don't have permission to view this page, if u went to see this page please Login"); 
      return false;
    }
  }
}
// this is route array
const routes: Routes = [
	{
		path : '',
		component :  LoginComponent
	},
	{
		path : 'about',
		component : AboutComponent,
		canActivate: [OnlyLoggedInUsersGuard]
	},
	{
		path : 'validetion',
		component : ValidationTestComponent,
		canActivate: [OnlyLoggedInUsersGuard]

	},
	{
		path : 'apptest',
		component : AppTestComponent,
		canActivate: [OnlyLoggedInUsersGuard]
	},
	{
		path : 'home',
		component : HomeComponent,
		canActivate: [OnlyLoggedInUsersGuard]
	},
	{
		path : 'addlist',
		component : AddListComponent,
		canActivate: [OnlyLoggedInUsersGuard]
	},
	{
		path : 'login',
		component : LoginComponent
	}

];

//route array call here
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AlwaysAuthGuard,OnlyLoggedInUsersGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
