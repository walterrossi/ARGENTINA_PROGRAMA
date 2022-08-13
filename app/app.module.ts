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
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
