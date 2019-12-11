import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aceuil-employer',
  templateUrl: './aceuil-employer.component.html',
  styleUrls: ['./aceuil-employer.component.css']
})
export class AceuilEmployerComponent implements OnInit {
employer:any;
user:any;
  constructor() { }
  getUser()
  {
    if(localStorage.getItem('token')==null)
    {
      console.log("token null");

    }else
    {
     this.employer =JSON.parse(localStorage.getItem('token')); 
     console.log(this.employer[0]);
     this.user = this.employer[0].idUer;
     console.log(this.user);
    }
  }
  ngOnInit() {
    console.log("slm");
    
    this.getUser();
  }

}
