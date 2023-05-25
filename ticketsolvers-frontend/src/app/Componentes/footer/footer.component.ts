import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/Vistas/login/login.component';
import { RegistroComponent } from 'src/app/Vistas/registro/registro.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  // constructor(public dialog: MatDialog){}

  // open_Ingresar_Dialog_footer(): void 
  // {
  //   let dialogIngresarReference = this.dialog.open(LoginComponent, {data: {},});
  // }

  // open_Registrarse_Dialog_footer(): void 
  // {
  //   let dialogRegistrarseRef = this.dialog.open(RegistroComponent, {data: {},});
  // }

}