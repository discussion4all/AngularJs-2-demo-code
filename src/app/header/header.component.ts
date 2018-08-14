import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	id : string;
	aboutid : string;
	pageid : string;
	apptestid : string;
	validetionid : string;
  addlist : string;
	route: string;
  constructor(location: Location, private router: Router) { 
//this for the css of menu active
  	router.events.subscribe((val) => {
  		 this.id="";
         this.aboutid="";
         this.pageid= "";
         this.validetionid ="";
         this.apptestid="";
         this.addlist="";

      if(location.path() != ''){
        this.route = location.path();
        if(this.route == "/about"){
        		this.aboutid="isActive";
        }
        else if(this.route == "/page"){
        	this.pageid = "isActive";
        }
        else if(this.route  == "/validetion"){
        	this.validetionid ="isActive";
        }
        else if(this.route  == "/apptest"){
        		this.apptestid ="isActive";
        }
        else if(this.route  == "/addlist"){
            this.addlist ="isActive";
        }
        
      } else {
        this.route = '/Home';
        this.id="isActive";
      }

    });
  }

  ngOnInit() {
  }

//-------logout from site
  logout(){
    window.alert("Logout sucessfully");
    sessionStorage.setItem("login","false");
    this.router.navigate(['/'])

  }

}
