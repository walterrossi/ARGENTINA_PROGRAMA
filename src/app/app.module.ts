import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Compo1Component } from './compo1/compo1.component';
import { LoginComponent } from './login/login.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HardComponent } from './hard/hard.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { NavbarComponent } from './navbar/navbar.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';

const firebaseConfig = {
  apiKey: "AIzaSyBtnbZDOPXPJ2zJOWlVc1Zi39IN4gNFQlE",
  authDomain: "loginportfolio-773a2.firebaseapp.com",
  projectId: "loginportfolio-773a2",
  storageBucket: "loginportfolio-773a2.appspot.com",
  messagingSenderId: "29345609883",
  appId: "1:29345609883:web:b3ef66a0c5d1c475a72e3e",
  measurementId: "G-K3Q8G22JH1"
};

@NgModule({
  declarations: [
    AppComponent,
    Compo1Component,
    LoginComponent,
    AcercaComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardComponent,
    HomeComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    NavbarComponent,
    EncabezadoComponent,
   
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
