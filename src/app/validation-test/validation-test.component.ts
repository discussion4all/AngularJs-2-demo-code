import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators,NgForm } from '@angular/forms';

@Component({
  selector: 'app-validation-test',
  templateUrl: './validation-test.component.html',
  styleUrls: ['./validation-test.component.css']
  
})
export class ValidationTestComponent implements OnInit {


	title = 'Angular Form Validation';
   angForm: FormGroup;

   constructor(private fb: FormBuilder) {
    this.createForm(); 
	}
 	createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       lname:['',Validators.required]
    });
	}
formData(angForm:NgForm){
 		console.log(angForm);
 } 
 ngOnInit() {
  }


}



