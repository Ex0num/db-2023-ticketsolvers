import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Vistas/error/error.component';
import { ContactoComponent } from './Vistas/contacto/contacto.component';
import { InicioComponent } from './Vistas/inicio/inicio.component';
import { BuzonComponent } from './Vistas/buzon/buzon.component';
import { FaqComponent } from './Vistas/faq/faq.component';

const routes: Routes = [
  {path:'FAQ',component:FaqComponent},
  {path:'buzon',component:BuzonComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'inicio',component:InicioComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: '**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
