import { Injectable } from '@angular/core';
  import {Http,Response, Headers, RequestOptions } from '@angular/http';   

import { Observable } from 'rxjs';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';  
import { Subject } from 'rxjs/Subject';
//------this is the service file for call of HTTP's or any long process of the project
@Injectable()
export class CommonService {
			private subject = new Subject<any>()
      public isLogin = false;
  constructor(public http: Http) { }
  getOneUser(user){
      return  this.http.post('http://localhost:1437/api/login/', user)  
            .map((response: Response) =>{
             
              this.isLogin = true;
              sessionStorage.setItem("login","true");
             return response.json()})     
  }

  GetUser(){       
    return this.http.get('http://localhost:1437/api/select/')  
            .map((response: Response) => response.json())              
  } 

  saveUser(user){
  	return this.http.post('http://localhost:1437/api/insert/', user)  
            .map((response: Response) =>response.json())    
               
  }  

  delete(s_id){
  		return this.http.post('http://localhost:1437/api/delete/',{s_id :s_id})
  		.map((response: Response) =>response.json())
  }

searching(search){
	console.log();
	return this.http.post('http://localhost:1437/api/search/', search)
		.map((response: Response) => response.json())
}


    //------just for login 
    isLoggedIn(): boolean {
      return this.isLogin;
    }



//----this  function for the componet comunication
		sendMsg(message:string){
				this.subject.next({ text: message })
		}
		clrMsg(){
			this.subject.next();
		}
		getMessage(): Observable<any> {
        return this.subject.asObservable()
    }



 }


	