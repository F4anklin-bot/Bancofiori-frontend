import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clients } from '../models/clients';

@Injectable({
  providedIn: 'root',
})
export class Service {
  private http = inject(HttpClient)

  private apiUrl = 'http://localhost:8080/api/clients';
  constructor(http: HttpClient) { }

  getClients() : Observable<Clients[]> {
    return this.http.get<Clients[]>(this.apiUrl);
  }
  
}
