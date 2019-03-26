import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = 'https://localhost:44389/api/Client/';

  constructor(private http:HttpClient) { }

  getAllClients():Observable<Client[]>{
    return this.http.get<Client[]>(this.baseUrl);
  }

  getClientWithClientID(id:number):Observable<Client>{
    return this.http.get<Client>(this.baseUrl+id).pipe();
  }
}
