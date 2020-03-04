import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeServiceService } from '../employee-service.service';
import { element } from 'protractor';

export class Emp{
  BOOKID :number;
  BOOKNAME:string;
  BOOKCOST:number;
  AUTHOR:string;
  
}
@Component({
  selector: 'app-list-com',
  templateUrl: './list-com.component.html',
  styleUrls: ['./list-com.component.css']
})
export class ListComComponent implements OnInit {

  BOOKID :number;
  BOOKNAME:string;
  BOOKCOST:number;
  AUTHOR:string;
 
  val:Boolean=true;
  
  empList: Array<Emp> = [];
  
 
  onclickAddDetails(){
    console.log(this.BOOKNAME,this.BOOKID,this.BOOKCOST,this.AUTHOR);
    let emp=new Emp();
    emp.BOOKNAME=this.BOOKNAME;
    emp.BOOKID=this.BOOKID;
    emp.BOOKCOST=this.BOOKCOST;
    emp.AUTHOR=this.AUTHOR;

    this.empList.push(emp);
    this.BOOKNAME ="";
    this.BOOKID = 0;
    this.AUTHOR="";
    this.BOOKCOST=0;
    }
     

    
    
    
  constructor(private employeeService:EmployeeServiceService) {  }
  

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
        console.log(element.BOOKNAME);
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
    this.BOOKID=emp.BOOKID;
    this.BOOKNAME=emp.BOOKNAME;
    this.BOOKCOST=emp.BOOKCOST;
    this.AUTHOR=emp.AUTHOR;
    
  }
  
  onclickDeleteDetails(emp:Emp){
    
    let index:number=this.empList.indexOf(emp);
    this.empList.splice(index,1);
    //this.empList.pop();
    
  }
  onclickUpdate()
  {
    this.val1=false;
    this.emp1.BOOKNAME=this.BOOKNAME;
    this.emp1.BOOKCOST=this.BOOKCOST;
    this.emp1.AUTHOR=this.AUTHOR;
    
    
  }
  //sorting according to column:-
  column:string;
  change(col:string)
  {
    console.log(col);
    this.column=col;
  }
 

}
