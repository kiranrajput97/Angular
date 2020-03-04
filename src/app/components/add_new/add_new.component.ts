import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-add_new',
  templateUrl: './add_new.component.html',
  styleUrls: ['./add_new.component.css']
})
export class AddNewComponent implements OnInit {
  submitted: boolean = false;
  addForm: FormGroup;
  constructor(private router: Router, private formBuiler: FormBuilder, public userService: UserService) { }

  ngOnInit() {
    this.addForm = this.formBuiler.group({
      id: ['',Validators.required],
      name: ['',Validators.required],
      cost:['',Validators.required],
      author:['',Validators.required]

    });
  }

  newBook() {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    
    this.userService.addBook(this.addForm.value);
    this.router.navigate(["/view_all"]);
  }

}

