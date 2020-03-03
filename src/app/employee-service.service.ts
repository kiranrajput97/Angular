import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Emp } from './list-com/list-com.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService  {

  empList: Array<Emp> = [];
  constructor(private httpClient:HttpClient) { }

 getData() {
    console.log("idvgukkrnbg");
    this.httpClient.get("assets/employee.json").subscribe((data:Emp[])=>{
      data.forEach(element => {
        this.empList.push(element);
      });
       console.log(data);
      })
  }
   


  
 
  getEmpList()
  {
    return this.empList;
  }
  setEmpList(emp:Emp)
  {
    this.empList.push(emp);
  }
}
