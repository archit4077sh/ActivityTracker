import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { UserService } from '../user.service';
import { User } from '../user_model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  data : User = {
      user_id : "dummy",
      event_type: "dummy",
      image_type : "dummy",
      instance : "dummy"
    };

  onClick(image_type)
    {
      this.data.user_id = this.route.snapshot.paramMap.get('id');
    this.data.event_type = 'click';
    this.data.image_type = image_type;
    this.data.instance = new Date().toString().substring(0,24);

    this.userService.post_req(this.data).subscribe();


    //alert(this.data.user_id + ' ' +  this.data.event_type + ' ' + this.data.image_type + ' at ' + this.data.instance);

    }

    onHover(image_type)
    {
      this.data.user_id = this.route.snapshot.paramMap.get('id');
   this.data.event_type = 'hover';
   this.data.image_type = image_type;
   this.data.instance = new Date().toString().substring(0,24);

   this.userService.post_req(this.data).subscribe();
    }


  constructor(private route : ActivatedRoute ,
   private userService : UserService) { }

  ngOnInit() {
  }

}
