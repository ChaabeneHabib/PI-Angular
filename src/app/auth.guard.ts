import { Injectable } from '@angular/core';
import { CanActivate, Router, } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public serviceUser : UserService,private router:Router){}
  canActivate(): boolean{
    if(this.serviceUser.loggedIn())
    {
      return true;
    }else
    {
      this.router.navigate(['registerEntreprise'])
      return false;
    }
   
  }
  
}
