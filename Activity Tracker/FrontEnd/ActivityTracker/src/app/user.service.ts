import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(http : HttpClient) { }
}
