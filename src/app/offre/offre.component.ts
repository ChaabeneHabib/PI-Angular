import { Component, OnInit } from '@angular/core';
import { OffreService } from './offre.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
listOffre:any[]=[];
  constructor(public serviceOffre:OffreService) { }
s : number =0;
  ngOnInit() {
      this.serviceOffre.getAllOffre().subscribe(res=>{
        this.listOffre=res;
        console.log(this.listOffre);
        this.s=this.listOffre.length

      })
  }

}
