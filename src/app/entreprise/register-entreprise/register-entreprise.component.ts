import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from '../entreprise.service';

@Component({
  selector: 'app-register-entreprise',
  templateUrl: './register-entreprise.component.html',
  styleUrls: ['./register-entreprise.component.css']
})
export class RegisterEntrepriseComponent implements OnInit {

  constructor(public serviceEnt : EntrepriseService) { }
  login(email,password)
  {
    console.log(email+ " pass : "+password);
    this.serviceEnt.authentificate(email,password).subscribe(res =>{
        console.log('sa7it');
    });
  }
  ngOnInit() {
  }

}
