import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CerrarSesionComponent } from '../../Dialogs/cerrar-sesion/cerrar-sesion.component';
import { MisDatosComponent } from '../../Dialogs/mis-datos/mis-datos.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-recepcion-supervisor',
  templateUrl: './recepcion-supervisor.component.html',
  styleUrls: ['./recepcion-supervisor.component.css']
})
export class RecepcionSupervisorComponent {

  constructor(public dialog: MatDialog)
  {
    let titulo:any = document.getElementById("titulo-superior");
    titulo.textContent = "Ticketsolvers | Buzon";
  }

  displayedColumns: string[] = ['name', 'weight', 'estado', 'symbol'];
  dataToDisplay = [...ELEMENT_DATA];

//   dataSource = new ExampleDataSource(this.dataToDisplay);

  
    dashboardDesplegada = false;
    switchearDashboard()
    {
        let contenedorDashboard = document.getElementById("img-mostrar-y-ocultar-dashboard");
        

        // let contenedorDashboard:any = document.getElementById("contenedor-dashboard");
        this.dashboardDesplegada = !this.dashboardDesplegada;

        if (this.dashboardDesplegada == true)
        {
        contenedorDashboard?.setAttribute("src","../../../assets/icons/dashboard/ocultar.png");
        // contenedorDashboard.style.width = "15rem";
        // contenedorDashboard.style.height = "17rem";
        }
        else
        {
        contenedorDashboard?.setAttribute("src","../../../assets/icons/dashboard/mostrar.png");
        // contenedorDashboard.style.width = "5rem";
        // contenedorDashboard.style.height = "3rem";
        }
    }

    selected = "";
    
    open_MostrarDatosPersonales_Dialog_buzon(): void
    {
        const dialogIngresarRef = this.dialog.open(MisDatosComponent, {data: {},});
        dialogIngresarRef.afterClosed().subscribe(result => 
        {
            console.log('The dialog was closed');
        });
    }

    cerrarSesion_Dialog_buzon():void
    {
        const dialogIngresarRef = this.dialog.open(CerrarSesionComponent, {data: {},});
        dialogIngresarRef.afterClosed().subscribe(result => 
        {
            console.log('The dialog was closed');
        });
        //Si sale todo bien
        // Swal.fire('Cerrar sesión','¡Se cerrará la sesión, muchas gracias por visitarnos!','success');
        
        //Si hay errores
        //Swal.fire('¡Hubo un error en el ingreso!','Reintente por favor','error');

        // Aquí puedes realizar la consulta al servidor enviando los datos correspondientes
        // ...
    }
}
