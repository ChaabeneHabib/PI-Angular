import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from '../entreprise.service';
import { OffreService } from 'src/app/offre/offre.service';

@Component({
  selector: 'app-setting-employer',
  templateUrl: './setting-employer.component.html',
  styleUrls: ['./setting-employer.component.css']
})
export class SettingEmployerComponent implements OnInit {
profil:any=[];
employer:any;
user:any;
listEmployer:any[]=[];
show:boolean=false;
hide:boolean=false;
offer:boolean=false;
on:boolean=true;
listRech:any[]=['offre publier','offre en cours','offre plus recent'];
offreNonPublier:boolean=false;
offrePlusRecent:boolean=false;
offrePublier:boolean=true;//initiallement publier
offresNonTraiter:any[]=[];
offres:any[]=[];
isRh:boolean=false;
ischef:boolean=false;
  constructor(  public serviceEnt : EntrepriseService,
    public serviceOffre:OffreService ) { }
rh()
{
  if(this.employer[0].roleEmp=="RH")
  {
    console.log("vous ete RH ,  afficher les Methode RH "+this.employer[0].roleEmp)
    this.isRh=true;
    this.ischef=false;
  }else if(this.employer[0].roleEmp=="chef_equipe")
  {
    console.log("vous ete chef equipe ,  afficher les Methode chef "+this.employer[0].roleEmp)

    this.isRh=false;
    this.ischef=true;
  }else
  {
    console.log("erreur"+this.employer[0].roleEmp);  
  }
}

  ngOnInit() {

    this. getUser();
    this.getProfilEntrperise();
    this.showEmployer();
    this.getAllOffreByEntrperise();
    this.rh();
}
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
getProfilEntrperise()
{
  this.serviceEnt.getInfiProfilByENtrprise(this.user.id).subscribe(res=>{
     
    this.profil=res;
    console.log(this.profil);
    
  });
}
showEmployer()
{
  this.serviceEnt.ShowEmployer(this.user.id).subscribe(res=>
    {
      console.log("success");  
      this.listEmployer=res;
      console.log(this.listEmployer);
    });
}
addOffre()
{
  this.offer=true;
  this.on=false;
}
onChange(deviceValue) {
  if(deviceValue=="offre en cours"){

    this.offrePublier=false;
    this.offrePlusRecent=false;
    this.offreNonPublier=true;
    this.serviceEnt.GetOffreNonPublier(this.user.id).subscribe(res=>{this.offres=res});
   
  }else if(deviceValue=="offre publier")
  {
    this.offrePublier=true;
    this.offrePlusRecent=false;
    this.offreNonPublier=false;
    this.serviceEnt.GetOffreByEntreprise(this.user.id).subscribe(res=>
      {
        this.offres=res;
     
        
      });
  }else
  {
    console.log("recent");  
    this.offrePublier=false;
    this.offreNonPublier=false;
    this.offrePlusRecent=true;
    this.serviceOffre.getAllOffre().subscribe(res=>{
      this.offres=res;
      this.offres.sort((a,b) => b.date -a.date );
      this.offres.forEach(element => {
       console.log(element);   
      });
    });
    
  }
}
getAllOffreByEntrperise()
{

  this.serviceEnt.GetOffreByEntreprise(this.user.id).subscribe(res=>
    {
      this.offres=res;
      console.log(this.offres);
      
    });
}
addOfreChefEquipe(locationM,diplomeM,nameM,descriptionOffreM,dateOffreM)
{
  console.log(locationM,diplomeM,nameM,descriptionOffreM,dateOffreM,this.employer[0].id);
  this.serviceEnt.AddOffreByRHAndManager(locationM,diplomeM,nameM,descriptionOffreM,dateOffreM,this.employer[0].id).subscribe(res=>{
    console.log("offre ajouter");
  });
}
}
