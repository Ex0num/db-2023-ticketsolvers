import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor()
  {
    let titulo:any = document.getElementById("titulo-superior");
    titulo.textContent = "Ticketsolvers | Inicio";
  }


  mostrarAccesosDirectos = false;
  switchearAccesoDirecto():void
  {
    let fabSoporteCliente = document.getElementById("acceso-directo-soporte-cliente");
    let fabSoporteTecnico = document.getElementById("acceso-directo-soporte-tecnico");;
    let fabSoporteFinanciero = document.getElementById("acceso-directo-soporte-financiero");;

    this.mostrarAccesosDirectos = !this.mostrarAccesosDirectos;

    if (this.mostrarAccesosDirectos == true)
    {
      fabSoporteCliente?.removeAttribute("hidden");
      fabSoporteTecnico?.removeAttribute("hidden");
      fabSoporteFinanciero?.removeAttribute("hidden");
    }
    else
    {
      fabSoporteCliente?.setAttribute("hidden","true");
      fabSoporteTecnico?.setAttribute("hidden","true");
      fabSoporteFinanciero?.setAttribute("hidden","true");
    }
  }
}
