import {FormBuilder,FormGroup,FormControl,Validators,NgForm} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {Http,Response, Headers, RequestOptions } from '@angular/http'; 
import {CommonService} from '../common.service'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	userForm : FormGroup;
	valbutton =  "Login";
	errorMessage : string;
  constructor(public newService :CommonService,private fb: FormBuilder,public router :Router ) { 
  	 this.createForm(); 
  }

createForm() {
    this.userForm = this.fb.group({
       s_email:['',Validators.required],
       s_password:['',Validators.required]
    });
	} 

  ngOnInit() {
  }

  onSave(user,isValid: boolean){

  		this.newService.getOneUser(user).subscribe(data => { 
        console.log("data");
  				if(data.data){
  					 this.router.navigate(['/home'])
  				}else{
  					alert("wrong ID and Password");
  			}
this.ngOnInit();    
}  ,error => this.errorMessage = error )  
  }
  
}
