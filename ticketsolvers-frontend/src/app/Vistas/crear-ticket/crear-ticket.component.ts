import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-crear-ticket',
  templateUrl: './crear-ticket.component.html',
  styleUrls: ['./crear-ticket.component.css']
})
export class CrearTicketComponent {

  constructor(public dialogIngreso: MatDialogRef<CrearTicketComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  // Datos ingresados
  nombre_ingresado:any;

  // Cierre del formulario
  onNoClick(): void {this.dialogIngreso.close();}

  enviarCreacionTicket()
  {
    console.log('Usuario:', this.nombre_ingresado);
  
      //Si sale todo bien
      //Swal.fire('¡Bienvenido/a!','¿Como has estado?','success');
      //this.dialogIngreso.close();
      
      //Si hay errores
      //Swal.fire('¡Hubo un error en el ingreso!','Reintente por favor','error');

    // Aquí puedes realizar la consulta al servidor enviando los datos correspondientes
    // ...
  }

  asunto_selecccionado:any;
}
