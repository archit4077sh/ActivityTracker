import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , of} from 'rxjs';
import { User } from './user_model';
import { Id } from './id_model';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }

   post_req(data : Id)
   {
     return this.http.post('http://localhost:3000/list' , data);
   }
}
