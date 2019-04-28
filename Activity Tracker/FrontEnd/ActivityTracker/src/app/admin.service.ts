import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//requiring it for making post request
import { Observable , of} from 'rxjs';//requiring it because http will return an Observable
import { User } from './user_model';
import { Id } from './id_model';//requiring it because in post_req function data is of type Id which is sent http://localhost:3000/list
                                //for fetching the users with specific id



@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { } //http is a private prperty and also a HttpClient injection site

   post_req(data : Id) //post request to http://localhost:3000/list for fetching the data from database have user_id = data.user_id
   {
     return this.http.post('http://localhost:3000/list' , data);//performing a post request and sending data of type Id to http://localhost:3000/list
                                                                //for fetching the data from the database and returning an Observable which will be subsribed in admin.component.ts
   }
}
