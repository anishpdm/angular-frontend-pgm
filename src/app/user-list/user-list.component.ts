import { Component, OnInit } from '@angular/core';
import {APIService} from '../api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  private  contacts:  Array<object> = [];
  constructor(private  apiService:  APIService) { }

  ngOnInit() {
    this.getContacts();

  }

  public  getContacts(){
    this.apiService.getContacts().subscribe((data:  Array<object>) => {
        this.contacts  =  data;
        console.log(data);
    });
}

}
