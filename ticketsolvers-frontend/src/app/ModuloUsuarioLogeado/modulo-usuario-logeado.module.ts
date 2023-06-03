import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuzonClienteComponent } from './Vistas/buzon-cliente/buzon-cliente.component';
import { AsignacionesEmpleadoComponent } from './Vistas/asignaciones-empleado/asignaciones-empleado.component';
import { RecepcionSupervisorComponent } from './Vistas/recepcion-supervisor/recepcion-supervisor.component';
import { ConfirmacionAccionComponent } from './Componentes/confirmacion-accion/confirmacion-accion.component';

const routes: Routes = [

  {path: 'buzon', component: BuzonClienteComponent},
  {path: 'recepcion', component: RecepcionSupervisorComponent},
  {path: 'asignaciones', component: AsignacionesEmpleadoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    ConfirmacionAccionComponent
  ]
})
export class ModuloUsuarioLogeadoRoutingModule { }