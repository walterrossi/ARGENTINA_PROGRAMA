import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth:AngularFireAuth) {}
 
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

  Logout() {
    this.afauth.signOut();
    console.log('Saliendo..');
    


}}
