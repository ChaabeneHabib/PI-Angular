import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-aceuil-entreprise',
  templateUrl: './aceuil-entreprise.component.html',
  styleUrls: ['./aceuil-entreprise.component.css']
})
export class AceuilEntrepriseComponent implements OnInit {
sub:any;
id:any;
user:any;
  constructor( private route: ActivatedRoute,
    private router: Router) { }
    getUser()
    {
      if(localStorage.getItem('token')==null)
      {
        console.log("token null");
  
      }else
      {
       this.user =JSON.parse(localStorage.getItem('token')); 
       console.log(this.user);
      }
    }
  ngOnInit() {
    this.getUser();
    this.sub = this.route
    .queryParams
    .subscribe(params => {
      console.log(params);
     
      // Defaults to 0 if no query param provided.
      this.id = +params['entreprise'] || 0;
      console.log(this.id);
    });
  }

}
