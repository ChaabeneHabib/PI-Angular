import { Component } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router:Router) { }
  title = 'pidev-angular';
  navEntreprise()
  {
    console.log("navv");
    this.router.navigate(['register']);
  }
}
