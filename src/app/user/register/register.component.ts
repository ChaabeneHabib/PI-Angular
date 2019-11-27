import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  FullName:any ;email:any; Phone:any; Password:any;
  constructor(public serviceUser : UserService,private router:Router) { }

  ngOnInit() {}
  register(FullName,email,Phone,Password)
  {
    console.log(FullName + " email "+email+" phone: "+Phone + " password : "+Password);
    this.FullName="";
    this.email="";
    this.Password="";
    this.Phone="";
    this.serviceUser.register(FullName,email,Phone,Password).subscribe(res=>{
      console.log("sucess");
    });
  }
  registerUser()
  {
    console.log("dd");
    this.router.navigate(['home']);
    
  }
}
