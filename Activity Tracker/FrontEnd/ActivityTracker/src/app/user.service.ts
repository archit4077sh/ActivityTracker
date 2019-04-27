import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , of} from 'rxjs';
 import { User } from './user_model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(http : HttpClient) { }
  post_req(data : User)
 {
   return this.http.post('http://localhost:3000/add' , data);
 }
}
