import { Component, OnInit } from '@angular/core';

import {CommonService} from './common.service'; 

@Component({
    
selector: 'app-root',
templateUrl: './app.component.html',

styleUrls: ['./app.component.css'],

})
export class AppComponent  { 
  
	name="This demo of pipes  hemins patel";
 
 constructor(public newService :CommonService) { }


  ngOnInit() {

  }
sendMessage(): void {
        // send message to subscribers via observable subject
        this.newService.sendMsg('Message from App Component to Home Component!');
    }
 
    clearMessage() : void {
        // clear message
        this.newService.clrMsg();
    } 
}
