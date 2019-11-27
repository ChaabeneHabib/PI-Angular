import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
ListUser:any[]=[];
  constructor(public serviceUser : UserService) { }

  ngOnInit() {}
  affiche()
  {
  this.serviceUser.geAlltUsers().subscribe(res=>{  
    this.ListUser=res;
    console.log(this.ListUser);

  });
  }
}
