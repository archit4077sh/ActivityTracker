import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//requiring it for making post request
import { Observable , of} from 'rxjs'; //requiring it because http will return an Observable
import { User } from './user_model'; //requiring it because in post_req function data is of type User which is sent to database by making post request on http://localhost:3000/add

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }//http is a private prperty and also a HttpClient injection site
  post_req(data : User) //function for post request
 {
   return this.http.post('http://localhost:3000/add' , data); //performing a post request and sending data of type User to http://localhost:3000/add
                                                              //for adding that data to the database and returning an Observable which will be subsribed in user.component.ts
}
}
