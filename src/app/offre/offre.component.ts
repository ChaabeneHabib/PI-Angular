import { Component, OnInit } from '@angular/core';
import { OffreService } from './offre.service';
import pdfmake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfmake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
  items:any[] = [
    { name: "archie" }, 
    { name: "jake" }, 
    { name: "richard" }
  ];
listOffre:any[]=[];
  constructor(public serviceOffre:OffreService  ) {}
s : number =0;
  ngOnInit() {
      this.serviceOffre.getAllOffre().subscribe(res=>{
        this.items=res;
        console.log(this.items);
        this.s=this.items.length

      });
      this.getNotificationOffre();
  }
  getNotificationOffre()
  {
    this.serviceOffre.getNotificationOffre().subscribe(res=>{
      console.log("Notifications");
      
      console.log(res);
      
    })
  }
  generatePdf(o){
    
    console.log(o);
    const documentDefinition = { content: 'nom Offre'+ o.name +"Diplome demander "+o.diplome +" location "+o.location + ""};
    pdfmake.createPdf(documentDefinition).open();
    pdfmake.createPdf(documentDefinition).download();
   }
}
