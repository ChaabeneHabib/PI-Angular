import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from '../entreprise.service';
import { error } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-entreprise',
  templateUrl: './register-entreprise.component.html',
  styleUrls: ['./register-entreprise.component.css']
})
export class RegisterEntrepriseComponent implements OnInit {
 
  constructor(public serviceEnt : EntrepriseService,private router:Router) { }
  login(email,password)
  {
    console.log(email+ " pass : "+password);
    
    this.serviceEnt.authentificate(email,password).subscribe(res =>{
      console.log(res.id);

      //let tokens = data.token;
      localStorage.setItem('token', JSON.stringify(res));
      this.router.navigate(['AcceuilEntreprise'],{queryParams:{entreprise:res.id}});
     
      
    },
    (error)=>{console.log("error")}
    );
    
  }
 
  verifMail(email)
  {
    this.serviceEnt.EmailExist(email).subscribe(res =>{
      console.log('exists : '+res);
    
  },
  (error)=>{console.log("error")});
  }
  ngOnInit() {
  }

}
