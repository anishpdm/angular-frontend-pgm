import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Users} from '../user-model'
import {APIService} from '../api.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
 name="";
 age="";
 rollno="";
 admno="";
 college="";
 constructor(private  apiService:  APIService) { }

  ngOnInit() {
    // this.sendContact();
  }

  onUserCreate(form: NgForm)
  {
    const user: Users={
      name:form.value.name,
      age:form.value.age,
      rollno:form.value.rollno,
      admno:form.value.admno,
      college:form.value.college
    }

   
    this.apiService.sendContact(user).subscribe((response) => {
      console.log(response);
      alert('Succesfully Inserted')
     
  });
  
console.log(JSON.stringify(user));
  }

}
