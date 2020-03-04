import { Component, OnInit } from '@angular/core';
import { Emp } from '../list-com/list-com.component';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  BOOKID:number;
  BOOKCOST:number;
  BOOKNAME:String;
  AUTHOR:String;
  empList: Array<Emp> = [];
  constructor(private employeeService:EmployeeServiceService) { }

  ngOnInit(): void {
    this.employeeService.getData();
    
  }

  ngOnDestroy() {
    
      }
  onclickAddDetails(){
    console.log(this.BOOKNAME,this.BOOKID,this.BOOKCOST,this.AUTHOR);
    let emp=new Emp();
    emp.BOOKNAME=this.BOOKNAME;
    emp.BOOKID=this.BOOKID;
    emp.BOOKCOST=this.BOOKCOST;
    emp.AUTHOR=this.AUTHOR;
    this.empList.push(emp);
    this.employeeService.setEmpList(emp);
    this.BOOKNAME ="";
    this.BOOKID = 0;
    this.AUTHOR="";
    this.BOOKCOST=0;
    }
}
