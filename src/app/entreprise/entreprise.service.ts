import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  const
  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  authentificate(email,password):Observable<any>
  {
    return this.http.get<any>('http://127.0.0.1:9080/pidev-web/rest/user/authuser?email='+email+'&password='+password,email)
  }
  
  EmailExist(email:String )
  {
    return this.http.get<any>('http://127.0.0.1:9080/pidev-web/rest/user/LoginExists?email='+email);

  } 
  getToken() {
    return localStorage.getItem('token')
  }
  loggedIn() {
    return !!localStorage.getItem('token')    
  }
  addProfilEntreprise(location,secteur,webSite,tailleE,typeSociete,Fondation,id,descript):Observable<any>
  {
    return this.http.post<any>('http://127.0.0.1:9080/pidev-web/rest/user/addProfil?idEntreprise='+id+'&location='+location+'&description='+descript+'&fondation=10/04/1996&secteur='+secteur+'&siteWeb='+webSite+'&tailleEntreprise='+tailleE+'&typeSociete='+typeSociete,this.httpOptions);
  }
  getProfilByENtrprise(idEntreprise):Observable<any>
  {
    return this.http.get<any>('http://127.0.0.1:9080/pidev-web/rest/user/getProfilByIdEntreprise?idEntreprise='+idEntreprise);
  }
  getInfiProfilByENtrprise(idEntreprise):Observable<any>
  {
    return this.http.get<any>('http://127.0.0.1:9080/pidev-web/rest/user/getInfoByIdEntreprise?idEntreprise='+idEntreprise);
  }
  updateProfil(location,secteur,webSite,tailleE,typeSociete,Fondation,id,descript)
  { 
    return this.http.post<any>('http://127.0.0.1:9080/pidev-web/rest/user/updateProfil?idEntreprise='+id+'&location='+location+'&description='+descript+'&fondation=10/04/1996&secteur='+secteur+'&siteWeb='+webSite+'&tailleEntreprise='+tailleE+'&typeSociete='+typeSociete,this.httpOptions);
  }
  GetOffreByEntreprise(idEntreprise):Observable<any[]>
  {
    return this.http.get<any[]>('http://127.0.0.1:9080/pidev-web/rest/offre/GetOffreByEntreprise/'+idEntreprise);
  }
  GetOffreNonPublier(idEntreprise):Observable<any[]>
  {
    return this.http.get<any[]>('http://127.0.0.1:9080/pidev-web/rest/offre/GetOffreNonTraiter/'+idEntreprise);
  }
  addOffre(locationOffre,diplome,name,descriptionOffre,dateOffre,idEntreprise):Observable<any>
  {
    return this.http.post<any>('http://127.0.0.1:9080/pidev-web/rest/offre/addOffreEntreprise?idEntreprise='+idEntreprise+'&location='+locationOffre+'&description='+descriptionOffre+'&diplome='+diplome+'&name='+name,this.httpOptions);
  }
  UserAbonneEntrperise():Observable<any[]>
  {
    return this.http.post<any[]>('http://127.0.0.1:9080/pidev-web/rest/user/UserSuivreEntreprise?idEntreprise=12&idUser=15',this.httpOptions);
  }
getAboneeEntreprise(id):Observable<any[]>
{
  return this.http.get<any[]>('http://127.0.0.1:9080/pidev-web/rest/user/getUserAbonee/?idEntreprise='+id);
}
addEmployer(Grade,Username,email,name,prenom,password,idEntreprise)
{
  return this.http.post<any>('http://127.0.0.1:9080/pidev-web/rest/employer/addEmp?Grade='+Grade+'&email='+email+'&nom='+name+'&password='+password+'&prenom='+prenom+'&username='+Username+'&role=RH&idEntreprise='+idEntreprise,this.httpOptions);

}
ShowEmployer(idEntreprise):Observable<any[]>
{
  return this.http.get<any>('http://127.0.0.1:9080/pidev-web/rest/employer/getEmployerEntrprise?idEntreprise='+idEntreprise);

}
deleteEmployer(id)
{
  return this.http.delete<any>('http://127.0.0.1:9080/pidev-web/rest/employer/deleteEmployer?idEmployer='+id);
}
SentMailEmployer( mailTo,  subject, message)
{
  return this.http.get<any>('http://127.0.0.1:9080/pidev-web/rest/employer/sendMail?login=habib.chaabene@esprit.tn&password=183JFT0485&toAddress=habib.chaabene@esprit.tn&subject='+subject+'&message='+message);
}
AddOffreByRHAndManager(locationM,diplomeM,nameM,descriptionOffreM,dateOffreM)
{
  return this.http.post<any>('http://127.0.0.1:9080/pidev-web/rest/offre/addOffreRoleRhAndManager?idEmployer=6&location='+locationM+'&description='+descriptionOffreM+'&diplome='+diplomeM+'&name='+nameM,this.httpOptions);
}
accepterOffre(idOffre)
{
  return this.http.get<any>('http://127.0.0.1:9080/pidev-web/rest/offre/AcceptOffre/'+idOffre);

}
refuserOffre()
{

}
  constructor(public http: HttpClient) { }
}
