import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Book } from '../../models/user-model';
@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {
  constructor(public userService:UserService,private router:Router) { 

  }

  ngOnInit() {
    
  }
  
  removeBook(i:number)
  {
    this.userService.remove(i);
  }
}


