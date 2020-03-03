import { Component, OnInit } from '@angular/core';
import { Emp } from '../list-com/list-com.component';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  ID:number;
  Salary:number;
  name:String;
  Department:String;
  empList: Array<Emp> = [];
  constructor(private employeeService:EmployeeServiceService) { }

  ngOnInit(): void {
    this.employeeService.getData();
    
  }

  ngOnDestroy() {
    
      }
  onclickAddDetails(){
    console.log(this.name,this.ID,this.Salary,this.Department);
    let emp=new Emp();
    emp.name=this.name;
    emp.ID=this.ID;
    emp.Salary=this.Salary;
    emp.Department=this.Department;
    this.empList.push(emp);
    this.employeeService.setEmpList(emp);
    this.name ="";
    this.ID = 0;
    this.Department="";
    this.Salary=0;
    }
}
