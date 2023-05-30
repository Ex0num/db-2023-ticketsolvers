import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../Dialogs/login/login.component';
import { RegistroComponent } from '../../Dialogs/registro/registro.component';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css']
})
export class HamburgerMenuComponent {

  opcionesClickeables = false;

  constructor(public dialog: MatDialog){}

  open_Ingresar_Dialog_hamburguesa(): void 
  {
    let dialogRef = this.dialog.open(LoginComponent, {data: {},});
  }

  open_Registrarse_Dialog_hamburguesa(): void 
  {
    let dialogRef = this.dialog.open(RegistroComponent, {data: {},});
  }

  switchearActivacionOpciones(): void
  {
    let opciones = document.querySelectorAll(".opcion-menu-hamburguesa");
    this.opcionesClickeables = !this.opcionesClickeables;
    
    if (this.opcionesClickeables == false) 
    {
      setTimeout(() =>
      {
        opciones.forEach((opcion:any, index)=> 
        {
          opcion.setAttribute("hidden","true");
        });
      }, 500);
    }
    else 
    {
      opciones.forEach((opcion:any, index)=> 
      {
        opcion.removeAttribute("hidden");
      });
    }
  }
}
