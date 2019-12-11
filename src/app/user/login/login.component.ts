import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public serviceUser : UserService,private router:Router) { }

  ngOnInit() {}
  authEmployer(login,password)
  {
    console.log(login + password);
    this.serviceUser.authentificate(login,password).subscribe(res=>{
      console.log(res);
      localStorage.setItem('token', JSON.stringify(res));
      this.router.navigate(['AcceuilEmployer'],{queryParams:{entreprise:res.id}});
    },
    (error)=>{console.log("error")}
    );
  }
}
