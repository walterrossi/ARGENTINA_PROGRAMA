import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { getAuth, signOut } from "firebase/auth";

import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService:AuthService, private router: Router) {

  }


  ngOnInit(): void {
  }


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



