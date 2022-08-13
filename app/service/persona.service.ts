import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';












@Injectable({
  providedIn: 'root'
})

export class PersonaService {
   URL='http://localhost:8080/';
  constructor(private http : HttpClient) { }
 
  public getPersona(): Observable <persona>{

   return this.http.get<persona>(this.URL+'buscar/1');


 }
}