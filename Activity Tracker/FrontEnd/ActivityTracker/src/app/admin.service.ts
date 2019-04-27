import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , of} from 'rxjs';
import { User } from './user_model';
import { Id } from './id_model';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  //
   // temp : User = {    user_id : "dummy",
   //     event_type: "dummy",
   //     image_type : "dummy",
   //     instance : "dummy"};

   // users : User[] = [{    user_id : "dummy",
   //     event_type: "dummy",
   //     image_type : "dummy",
   //     instance : "dummy"}];

  constructor(private http : HttpClient) { }
  // get_req()
   // {
   //   return this.http.get('http://localhost:3000/list');
   // }

   post_req(data : Id)
   {
     return this.http.post('http://localhost:3000/list' , data);
   }
}
