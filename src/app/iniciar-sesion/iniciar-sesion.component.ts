import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { getAuth, signOut } from "firebase/auth";

import { Router } from '@angular/router';




@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent{
  
  usuario = {
  email:'',
  password:''
 }
  constructor(private authService:AuthService, private router: Router) {

  }

  Ingresar(){  console.log(this.usuario); 
    const {email,password} = this.usuario;
    this.authService.login(email,password).then(res=> {
      console.log("Se logueo: ",res);
    })
 
      // le agregue esto///
       
   

   
  }
       
      ////////hasta aca///////

   
   
    
  

  Logout() {
  
  //---//
const auth = getAuth();
signOut(auth).then(() => {
 console.log("Saliendo.."); // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
  ///-------///
  
  }
}




 // Logout() { console.log("Saliendo..");
  //const auth = getAuth();
  //  return this.auth.signOut().then(() => {
    //  localStorage.removeItem('my-test-app-currentUser');
      //window.alert('You have been signed-out');
   // });

  

  //}
  

  
 







