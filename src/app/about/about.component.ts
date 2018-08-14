import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpModule } from '@angular/http';
//---this for the data table
import { DataTablesModule } from 'angular-datatables';

class Student{ 
	s_id : number;
	s_name : string;
	s_email : string;
	s_password : string;
	s_gender : string;
}
class DataTablesResponse {
    data: any[];
    draw: number;  
    recordsFiltered: number;
    recordsTotal: number;
}


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
//-=-=-= this is function for the  for axjx call for listing(using datatable)
export class AboutComponent implements OnInit {
	dtOptions : DataTables.Settings= {};
	students : Student[] = []; 	
  constructor(private http: HttpClient) { }
  ngOnInit() {
  		const that = this;
      //this variable for the pagination
  		this.dtOptions = {
  			pagingType : "full_numbers",
  			pageLength: 10,
  			serverSide : true,
  			processing : true,
        columns :[
          {data : 's_id'},{data : 's_name'}, {data : 's_email'}, {data : 's_password'}, {data : 's_gender' },
        ],
        //-------ajax call for data
  			ajax : (dataTablesParameters:any, callback)=>{
  				console.log(dataTablesParameters);
  					that.http.post<DataTablesResponse>('http://localhost:1437/api/select/',
					dataTablesParameters).subscribe(resp=>{
						that.students = resp.data;
						callback({
							recordsTotal :resp.recordsTotal,
							recordsFiltered : resp.recordsFiltered,
							data : [],
						});
					});
  			},
  			

  		};
  }

}
