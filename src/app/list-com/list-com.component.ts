import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeServiceService } from '../employee-service.service';
import { element } from 'protractor';

export class Emp{
  ID:number;
  Salary:number;
  name:String;
  Department:String;
  
}
@Component({
  selector: 'app-list-com',
  templateUrl: './list-com.component.html',
  styleUrls: ['./list-com.component.css']
})
export class ListComComponent implements OnInit {

  ID:number;
  Salary:number;
  name:String;
  Department:String;
  empList: Array<Emp> = [];
  
 
  onclickAddDetails(){
    console.log(this.name,this.ID,this.Salary,this.Department);
    let emp=new Emp();
    emp.name=this.name;
    emp.ID=this.ID;
    emp.Salary=this.Salary;
    emp.Department=this.Department;

    this.empList.push(emp);
    this.name ="";
    this.ID = 0;
    this.Department="";
    this.Salary=0;
    }
 
      val:Boolean=false;
      showDetails()
      {
        this.val=!this.val;
        this.empList.forEach(element => {
         console.log(element.ID+" "+element.name+" "+element.Salary+" "+element.Department);
      });

      }
    
    
  constructor(private employeeService:EmployeeServiceService) { 
    
    
  }
  

  ngOnInit(): void {
   
    /*this.httpClient.get("assets/employee.json").subscribe((data:Emp[])=>{
    data.forEach(element => {
      this.empList.push(element);
    });
     console.log(data);
    })*/
    this.employeeService.getData();
      this.empList=this.employeeService.getEmpList();
      this.empList.forEach(element => {
        console.log(element.name);
      })
      
  
  }

  ngOnDestroy() {
    //this.employeeService.setEmpList(this.empList);
    this.empList.slice();
      }

      val1:Boolean=false;
      index1:number;
      emp1:Emp;
  onclickUpdateDetails(emp:Emp ){
    this.emp1=emp;
    this.val1=true;
    let index:number=this.empList.indexOf(emp);
    this.ID=emp.ID;
    this.name=emp.name;
    this.Salary=emp.Salary;
    this.Department=emp.Department;
    
  }
  
  onclickDeleteDetails(emp:Emp){
    
    let index:number=this.empList.indexOf(emp);
    this.empList.splice(index,1);
    //this.empList.pop();
    
  }
  onclickUpdate()
  {
    this.val1=false;
    this.emp1.name=this.name;
    this.emp1.Salary=this.Salary;
    this.emp1.Department=this.Department;
    
    
  }
  //sorting according to column:-
  column:string;
  change(col:string)
  {
    console.log(col);
    this.column=col;
  }
  SearchID:number;
  SearchName:String;
  SearchSalary:number;
  SearchDepartment:String;
  searchElement:any;
  
  search(element:any){

    this.searchElement=element;
}

}
