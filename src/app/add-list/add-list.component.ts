import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators,NgForm} from '@angular/forms'; 

/*this is just demo for all item in the list(dymanic  list)*/
class ListArr{
	name : string;
}
@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

	userForm : FormGroup;
	ListArr : Array<ListArr>;

  constructor(private fb: FormBuilder) {
  	this.createForm(); 
  	this.ListArr =[];
   }
   //--create form
 createForm() {
    this.userForm = this.fb.group({
    	txtvalue : ['',Validators.required]
    });
	} 
  ngOnInit() {
  }

  addInList(value){
    //---add in list(array)
  	this.ListArr.push(value);
  	console.log(this.ListArr);
     this.userForm = this.fb.group({
      txtvalue : ["",Validators.required]
    });
  		
  }


}
 