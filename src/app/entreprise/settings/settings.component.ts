import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { EntrepriseService } from '../entreprise.service';
import { OffreService } from 'src/app/offre/offre.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  items:any[] = [
    { name: "archie" }, 
    { name: "jake" }, 
    { name: "richard" }
  ];
	private notifier: NotifierService;
  listRech:any[]=['offre publier','offre en cours','offre plus recent'];
  offreNonPublier:boolean=false;
  offrePlusRecent:boolean=false;
  offrePublier:boolean=true;//initiallement publier
  
  user:any;
  offres:any[]=[];
  profil:any=[];
  location:String;
  secteur :String ; 
  webSite : String ; 
  tailleE :number ;
  typeSociete :String ;
  description:String;
  Fondation: any ; 
  valeur:String="";
  show:boolean=false;
  hide:boolean=false;
  offer:boolean=false;
  on:boolean=true;
  abonnee:number=0;
  listAbonnee:any[]=[];
  listEmployer:any[]=[];
  constructor(private route: ActivatedRoute,
    private router: Router,public serviceEnt : EntrepriseService,notifier: NotifierService,public serviceOffre:OffreService ) {
      this.notifier = notifier;
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
test():Boolean
{
  if(this.profil.id!=null)
  {  
    this.show=true;
    this.hide=false;
    return true ; 
  }else
  {
    this.show=false;
    this.hide=true;
    return true;
  }
}
//Fondation : Date;

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
    this.verifProfil();
    this.getAllOffreByEntrperise();
    this.getAbonneeEntreprise(this.user.id);
    this.showEmployer();
     /*  this.route.params.subscribe(params => {
        let id = params['id'];
      
      
        console.log(`${id}`);
        });
 */
  }


  verifProfil()
  {
    this.serviceEnt.getInfiProfilByENtrprise(this.user.id).subscribe(res=>{
     
      this.profil=res;
      
      this.location=this.profil.location;
      this.secteur= this.profil.secteur;
      this.tailleE=this.profil.tailleEntreprise;
      this.typeSociete= this.profil.typeSociete;
      this.description = this.profil.description;
      this.webSite =this.profil.siteWeb;
      this.Fondation =  new Date(this.profil.fondation);
    });
 
  }
  updateProfil(location,secteur,webSite,tailleE,typeSociete,Fondation,id,descript)
  {
    console.log("updateeee ");
  //  console.log(location+" "+secteur+" "+webSite+" "+tailleE+" "+typeSociete,Fondation + "id : "+id+"des : "+descript); 

       this.serviceEnt.updateProfil(location,secteur,webSite,tailleE,typeSociete,Fondation,id,descript)
       .subscribe(res=>{
         console.log("update succes");
       })
  }
  addProfil(location,secteur,webSite,tailleE,typeSociete,Fondation,id,descript){
    
    console.log("month "+Fondation.getMonth())
    console.log(location+" "+secteur+" "+webSite+" "+tailleE+" "+typeSociete,Fondation + "id : "+id+"des : "+descript); 

     
     this.serviceEnt.getProfilByENtrprise(this.user.id).subscribe(res=>{
      console.log(res);
      if(res==true)
      {
          console.log("mawjoud");
      }
      else
      {
        console.log("mech mawjoud");
        this.serviceEnt.addProfilEntreprise(location,secteur,webSite,tailleE,typeSociete,Fondation,id,descript).subscribe
        (res=>{
          console.log("ajout sucess" +res);
        })      
      }
       },
     (error)=>{console.log("error")});  
  }
  getAllOffreByEntrperise()
  {
 
    this.serviceEnt.GetOffreByEntreprise(this.user.id).subscribe(res=>
      {
        this.offres=res;
        console.log(this.offres);
        
      });
  }
  addOffre()
  {
    this.offer=true;
    this.on=false;
  }
  addOfre(locationOffre,diplome,name,descriptionOffre,dateOffre)
  {
 
     this.serviceEnt.addOffre(locationOffre,diplome,name,descriptionOffre,dateOffre,this.user.id).subscribe(res=>
      {
        console.log("ajout sucess");
        this.offer=false;
        this.showNotification('success','Offre ajouter !');
        
      }); 
  }
  getAbonneeEntreprise(id)
  {
  
    this.serviceEnt.getAboneeEntreprise(id).subscribe(res=>{
      console.log("abonee");
      
      console.log(res);
      this.listAbonnee=res;
      this.abonnee=res.length;
      
    })
  }
  public showNotification( type: string, message: string ): void {
		this.notifier.notify( type, message );
	}
  showNotif()
  {
    this.showNotification('default','dddd')
  }
  addEmployer(Grade,Username,email,name,prenom,password)
  {
    console.log(Grade,Username,email,name,prenom,password);
    this.serviceEnt.addEmployer(Grade,Username,email,name,prenom,password,this.user.id).subscribe(res=>{
      console.log("sucess");
      
    }) 
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
}
