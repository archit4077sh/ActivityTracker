import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //used for fetching the id part of URL


import { UserService } from '../user.service';
import { User } from '../user_model';//for making the data of User type and sending that to database

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  data : User = { // creating a data of type User to send it to the http://localhost:3000/add for adding the data in the database
      user_id : "dummy",
      event_type: "dummy",
      image_type : "dummy",
      instance : "dummy"
    };

  onClick(image_type) //If there is click event on image on user.component.html page then this function sends the data to  http://localhost:3000/add for adding to database
    {
<<<<<<< HEAD
    this.data.user_id = this.route.snapshot.paramMap.get('id'); //fetching the id of the user from the URL
=======
    this.data.user_id = this.route.snapshot.paramMap.get('id');
>>>>>>> 03b481d... Comments Removed
    this.data.event_type = 'click';
    this.data.image_type = image_type;
    this.data.instance = new Date().toString().substring(0,24);//finding a substring of Timestamp

<<<<<<< HEAD
    this.userService.post_req(this.data).subscribe();//calling post_req function in UserService and subscribing the Observable returned
=======
    this.userService.post_req(this.data).subscribe();
>>>>>>> 03b481d... Comments Removed

    }

    onHover(image_type)//If there is hover event on image on user.component.html page then this function sends the data to  http://localhost:3000/add for adding to database
    {

<<<<<<< HEAD
   this.data.user_id = this.route.snapshot.paramMap.get('id');//fetching the id of the user from the URL
=======
   this.data.user_id = this.route.snapshot.paramMap.get('id');
>>>>>>> 03b481d... Comments Removed
   this.data.event_type = 'hover';
   this.data.image_type = image_type;
   this.data.instance = new Date().toString().substring(0,24);//finding a substring of Timestamp

   this.userService.post_req(this.data).subscribe();//subsribing the Observable from UserService
    }


  constructor(private route : ActivatedRoute ,
   private userService : UserService) { } //here userService will act as UserService injection site

  ngOnInit() {
  }

}
