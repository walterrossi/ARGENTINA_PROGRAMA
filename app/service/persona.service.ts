import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';
import { ModalAcercaComponent } from '../modal-acerca/modal-acerca.component';




@Injectable({
  providedIn: 'root'
})

export class PersonaService {
   URL='http://localhost:8080/';
  constructor(private http : HttpClient) { }
 
  public getPersona(): Observable <persona>{

   return this.http.get<persona>(this.URL+'buscar/1');

 }
//agregue esto revisar
 putForm(form:ModalAcercaComponent): Observable <persona>{

  return this.http.put<persona>(this.URL+'editar/1',form);
  
}
//hasta aca



 ///--------------------////




}


