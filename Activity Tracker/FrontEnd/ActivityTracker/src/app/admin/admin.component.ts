import { Component, OnInit } from '@angular/core';

import { AdminService } from '../admin.service';
import { ActivatedRoute } from '@angular/router';

import { User } from '../user_model';
import { Id } from '../id_model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users : User[];

  new_data : Id = {
    user_id : "dummy"
  };
  constructor(private adminService : AdminService , private route : ActivatedRoute) { }

  ngOnInit() {
    //  this.get_req();
 this.post_req();
  }
  // get_req() : void {
 //
 //   //  alert("sss");
 //   this.adminService.get_req().subscribe((res) =>{
 //     this.users = res as User[];
 //   }
 //   );
 // }
 post_req() : void{

     this.new_data.user_id = this.route.snapshot.paramMap.get('id');

     this.adminService.post_req(this.new_data).subscribe((res) => {this.users = res as User[];});
   }


}
