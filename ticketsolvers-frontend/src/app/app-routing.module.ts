import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Vistas/home/home.component';
import { ErrorComponent } from './Vistas/error/error.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
