import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {  
  

  userData: any;  //agregue esta linea

  constructor(private afauth:AngularFireAuth,
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
       
    ) {

      this.afauth.authState.subscribe((user) => {
        if (user) {
          this.userData = user;
          localStorage.setItem('user', JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem('user')!);
         
          //console.log(localStorage.getItem(user.refreshToken)); //no logro que me imprima
          this.router.navigate(['home']);
         

        } else {
          localStorage.setItem('user', 'null');
          JSON.parse(localStorage.getItem('user')!);
        }
      });


    }
 
  async login (email: string, password: string){
    try {
      return await this.afauth.signInWithEmailAndPassword(email,password);
    } catch (err){
       console.log("Error en el Login", err);
       return null;
    }
  }




  async loginWithGoogle (email: string, password: string){
    try {
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (err){
       console.log("Error en el Login con Google:", err);
       return null;
    }
  }

 // Logout() {
   // this.afauth.signOut();
   // console.log('Saliendo..');
    
//}


// Sign out
Logout() { console.log('Saliendo..');
  return this.afauth.signOut().then(() => {
    localStorage.removeItem('user');
    this.router.navigate(['sign-in']);
  });
}




}
