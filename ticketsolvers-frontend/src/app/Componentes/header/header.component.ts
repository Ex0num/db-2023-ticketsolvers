import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../Dialogs/login/login.component';
import { RegistroComponent } from '../../Dialogs/registro/registro.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public dialog: MatDialog) {}

  open_Ingresar_Dialog_header(): void {
    const dialogIngresarRef = this.dialog.open(LoginComponent, {
      data: {},
    });

      dialogIngresarRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  open_Registrarse_Dialog_header(): void {
    const dialogRegistrarseRef = this.dialog.open(RegistroComponent, {
      data: {},
    });

    dialogRegistrarseRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}