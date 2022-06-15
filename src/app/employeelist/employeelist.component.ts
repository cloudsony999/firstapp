import { Component, OnInit } from '@angular/core';
import { ArrayserviceService } from '../arrayservice.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employeelist',
 template:

`
<h1>Employee Name are :- </h1>

<ul *ngFor="let y of x">
<li>{{y.name }}</li>
</ul>
`

})
export class EmployeelistComponent implements OnInit {

  x:Employee[]=[];
  constructor(private a:ArrayserviceService) { }

  ngOnInit() {
    console.log("inside init...")
    this.a.getData().subscribe(data=>{this.x=data;
    });
  
  }

  
}
