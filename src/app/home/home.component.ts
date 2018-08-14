import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

	   Time = new Date();
	message: any;
    subscription: Subscription;

  constructor(private commonService: CommonService) {

  		 this.subscription = this.commonService.getMessage().subscribe(message => { this.message = message; });
   }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

  ngOnInit() {
  }

}
