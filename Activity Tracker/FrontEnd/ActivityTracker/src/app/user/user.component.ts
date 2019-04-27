import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  onClick(image_type)
    {
      alert('clicked' + 'on' + image_type);
    }

    onHover(image_type)
    {
      alert('hovered' + 'on' + image_type );
    }


  constructor() { }

  ngOnInit() {
  }

}
