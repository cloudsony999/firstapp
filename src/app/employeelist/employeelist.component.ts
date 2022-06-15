import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  product={
    title:"football",
    price:500,
  };

  btnHeight=200;
  btnWidth=375;


  addProducts()
  {
    //alert("I am clicked......");
    console.log('I AM CLICKED..........');
  }

  name="amitava";


  public emps=[
    {"id":1,"name":"amitava","address":"kolkata","phone":1234},
    {"id":2,"name":"amit","address":"delhi","phone":8888},
    {"id":3,"name":"sumit","address":"chennai","phone":5434},
    {"id":4,"name":"bimal","address":"hyd","phone":1874}
      ];

}
