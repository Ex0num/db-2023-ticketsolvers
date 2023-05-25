import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  constructor()
  {
    let titulo:any = document.getElementById("titulo-superior");
    titulo.textContent = "Ticketsolvers | Contacto";
  }

}
