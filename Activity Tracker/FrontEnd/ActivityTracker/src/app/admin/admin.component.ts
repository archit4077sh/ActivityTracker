import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';//used for fetching the id part of URL

import { AdminService } from '../admin.service';
import { User } from '../user_model';
import { Id } from '../id_model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users : User[];//creating users array of type User for storing and displaying the data in admin.component.html fetched from database

  new_data : Id = { //creating new_data of type Id for sending the id which will be fetched from URL to post_req function for performing the post request   
    user_id : "dummy"
  };
  constructor(private adminService : AdminService , private route : ActivatedRoute) { } //adminService is a AdminService injecting site

  ngOnInit() {

 this.post_req(); //post_req will be called on initialization of admin component
  }
 post_req() : void{

     this.new_data.user_id = this.route.snapshot.paramMap.get('id');//fetching the id of the user from the URL

     this.adminService.post_req(this.new_data).subscribe((res) => {this.users = res as User[];});//calling post_req  function in AdminService  and sending data of type Id in that and subscribing the Observable returned
                                                                                                //Assigning the users array to response coming from post request
                                                                                                //response is the array of User which contain the information about user having specific id.
   }


}
