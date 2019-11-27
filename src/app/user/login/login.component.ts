import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public serviceUser : UserService) { }

  ngOnInit() {
  }

  login(email,password)
  {
    console.log(email + " pass : "+password);
    this.serviceUser.authentificate(email,password).subscribe(res=>{
      console.log("authentificate sucess vous ete employer");
    });
  }
}
