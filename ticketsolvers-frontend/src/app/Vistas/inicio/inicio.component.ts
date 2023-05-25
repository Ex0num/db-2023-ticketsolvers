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
}
