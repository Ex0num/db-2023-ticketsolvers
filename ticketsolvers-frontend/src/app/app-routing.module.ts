import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Vistas/error/error.component';
import { ContactoComponent } from './Vistas/contacto/contacto.component';
import { InicioComponent } from './Vistas/inicio/inicio.component';
import { FaqComponent } from './Vistas/faq/faq.component';
import { BuzonClienteComponent } from './ModuloUsuarioLogeado/Vistas/buzon-cliente/buzon-cliente.component';
import { AsignacionesEmpleadoComponent } from './ModuloUsuarioLogeado/Vistas/asignaciones-empleado/asignaciones-empleado.component';
import { RecepcionSupervisorComponent } from './ModuloUsuarioLogeado/Vistas/recepcion-supervisor/recepcion-supervisor.component';

const routes: Routes = [

  // Componentes de 'Modulo usuario logeado'
  {path: 'buzon', component: BuzonClienteComponent, 
  loadChildren: () => import('./ModuloUsuarioLogeado/modulo-usuario-logeado.module').then(m => m.ModuloUsuarioLogeadoRoutingModule)},
  
  {path: 'recepcion', component: RecepcionSupervisorComponent, 
  loadChildren: () => import('./ModuloUsuarioLogeado/modulo-usuario-logeado.module').then(m => m.ModuloUsuarioLogeadoRoutingModule)},

  {path: 'asignaciones', component: AsignacionesEmpleadoComponent, 
  loadChildren: () => import('./ModuloUsuarioLogeado/modulo-usuario-logeado.module').then(m => m.ModuloUsuarioLogeadoRoutingModule)},

  // Componentes cargados en el modulo inicial
  {path:'FAQ',component:FaqComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'inicio',component:InicioComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: '**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
