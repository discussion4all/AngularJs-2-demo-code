import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators,NgForm} from '@angular/forms'; 
import {Http,Response, Headers, RequestOptions } from '@angular/http'; 
import {CommonService} from '../common.service';  
/* CRUD Demo with using the Node.js API*/
@Component({
  selector: 'app-app-test',
  templateUrl: './app-test.component.html',
  styleUrls: ['./app-test.component.css']
})
export class AppTestComponent implements OnInit {
Repdata =[]; 
i : number;
userForm : FormGroup;
p: number = 1; 
originalData = [];
valbutton ="Save";  
title = 'app';	
 
constructor(public newService :CommonService,private fb: FormBuilder) { 
			 this.createForm(); 
  } 
  //====CRATE the from 
  createForm() {
    this.userForm = this.fb.group({
    	s_id : new FormControl(),
       s_name: ['', Validators.required ],
       s_email:['',Validators.required],
       s_password:['',Validators.required],
       s_gender :['',Validators.required]
    });
	} 



ngOnInit() {    
  //call serrvice and fetch data from database
this.newService.GetUser().subscribe(data =>  {this.Repdata = data; 
  console.log(data);
  this.originalData = data;})	 
	
}  
//------save data in database
onSave = function(user,isValid: boolean) {  
user.mode= this.valbutton;  
this.newService.saveUser(user).subscribe(data =>  {  alert(data.data);  
this.ngOnInit();    
}   
, error => this.errorMessage = error )  
} 
//-------edit form fillup
edit = function(kk){
		this.userForm = this.fb.group({
    	s_id : [kk.s_id] ,
       s_name: [kk.s_name, Validators.required ],
       s_email:[kk.s_email, Validators.required ],
       s_password:[kk.s_password, Validators.required ],
       s_gender :[kk.s_gender, Validators.required ]
    });
		this.valbutton = "Update";
 

}
//------delete data function
delete = function(s_id){
  if(confirm("You went to delete data ?")){
 		this.newService.delete(s_id).subscribe(data =>  {  alert(data.data) ;this.ngOnInit(); });
  }
 }
 //-custom search 
onSearch = function(searchValue){
	this.newService.searching(searchValue).subscribe(data =>  {this.Repdata = data;});
}


//-------find data
 findData = function(){
 		if(this.s_search == ''){
 				this.Repdata = this.originalData;
 				console.log("from find Data");
 				return;
 		}
    //----search logic
 		var searchData = [];
 		 for(this.i = 0;this.i< this.originalData.length;this.i++){
 		 		var studentName = this.originalData[this.i]['s_name'].toLowerCase();
 		 		console.log(studentName);
 		 		var studentEmail = this.originalData[this.i]['s_email'].toLowerCase();
 		 		if(studentName.indexOf(this.s_search.toLowerCase()) >= 0 ||
 		 		 studentEmail.indexOf(this.s_search.toLowerCase()>= 0))
 		 		{
 		 			 searchData.push(this.originalData[this.i]);
 		 		}
 		 }
 		 this.Repdata = searchData;
 		 //console.log(this.Repdata);
 }

  


}
  