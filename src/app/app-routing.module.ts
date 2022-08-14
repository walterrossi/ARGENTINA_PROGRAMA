import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';

 
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  { path: "portfolio", component: PortfolioComponent },
  { path: "iniciar-sesion", component: IniciarSesionComponent },
  //{ path:'',redirectTo: "iniciar-sesion", pathMatch:'full'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
