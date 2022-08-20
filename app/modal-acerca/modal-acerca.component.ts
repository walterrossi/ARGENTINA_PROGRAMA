import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Form } from '@angular/forms';
import { AcercaComponent } from '../acerca/acerca.component';
import { persona } from '../model/persona.model';
import { PersonaService } from '../service/persona.service';


@Component({
  selector: 'app-modal-acerca',
  templateUrl: './modal-acerca.component.html',
  styleUrls: ['./modal-acerca.component.css']
})
export class ModalAcercaComponent implements OnInit {

    acercaForm = new FormGroup({
    acerca : new FormControl(''),
    educacion: new FormControl(''),
    experiencia: new FormControl(''),
    hardsoft: new FormControl('')
   })

  constructor(private api:PersonaService ) { }

  ngOnInit(): void {
  }

 
putForm(form:ModalAcercaComponent){
   
  this.api.putForm(form).subscribe(data => {
     console.log(data);
   })
 console.log(form);
  }

}



