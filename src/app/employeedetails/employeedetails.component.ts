import { Component, OnInit } from '@angular/core';
import { ArrayserviceService } from '../arrayservice.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employeedetails',
  template:

`
<h1>Employee Details are :- </h1>

<ul *ngFor="let k of g">
<li>{{k.id}}*{{k.name }}**{{k.address}}***{{k.phone}}</li>
</ul>
`
})
export class EmployeedetailsComponent implements OnInit {

  constructor(private as:ArrayserviceService) { }

  g:Employee[]=[];

  ngOnInit()
  {
    
      console.log("inside init...")
      this.as.getData().subscribe(data=>{this.g=data;
      });
  }

  

}
