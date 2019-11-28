import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  const
  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  authentificate(email,password)
  {
    return this.http.get<any>('http://127.0.0.1:9080/pidev-web/rest/user/authuser?email='+email+'&password='+password,this.httpOptions);
  }
  constructor(public http: HttpClient) { }
}
