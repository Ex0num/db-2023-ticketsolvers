import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.css']
})
export class MisDatosComponent {
  constructor(public dialogMisDatos: MatDialogRef<MisDatosComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  // Datos ingresados
  nombre_ingresado:any;
  password_ingresada:any;

  // Cierre del formulario
  onNoClick(): void { this.dialogMisDatos.close(); }

  enviarIngreso()
  {
    console.log('Usuario:', this.nombre_ingresado);
    console.log('Contraseña:', this.password_ingresada);
  
      //Si sale todo bien
      //Swal.fire('¡Bienvenido/a!','¿Como has estado?','success');
      //this.dialogIngreso.close();
      
      //Si hay errores
      //Swal.fire('¡Hubo un error en el ingreso!','Reintente por favor','error');

    // Aquí puedes realizar la consulta al servidor enviando los datos correspondientes
    // ...
  }

}