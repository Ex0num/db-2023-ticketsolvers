import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/Vistas/login/login.component';
import { RegistroComponent } from 'src/app/Vistas/registro/registro.component';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css']
})
export class HamburgerMenuComponent {

  constructor(public dialog: MatDialog){}

  open_Ingresar_Dialog_hamburguesa(): void 
  {
    let dialogRef = this.dialog.open(LoginComponent, {data: {},});
  }

  open_Registrarse_Dialog_hamburguesa(): void 
  {
    let dialogRef = this.dialog.open(RegistroComponent, {data: {},});
  }
}
