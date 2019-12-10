import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(public http: HttpClient) { }

  const
  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })}

  getAllOffre():Observable<any[]>
  {
     return  this.http.get<any[]>('http://127.0.0.1:9080/pidev-web/rest/offre/all');
  }
  getNotificationOffre()
{
  return this.http.get<any[]>('http://127.0.0.1:9080/pidev-web/rest/offre/GetNotifOffre/15');
}
}
