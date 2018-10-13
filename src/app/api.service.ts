import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export  class  APIService {
  constructor(private  httpClient:  HttpClient) {}
  getContacts(){
      return  this.httpClient.get('http://localhost:3000/users');
  }

  sendContact(xx){
    return  this.httpClient.post('http://localhost:3000/users',xx);
}

}
