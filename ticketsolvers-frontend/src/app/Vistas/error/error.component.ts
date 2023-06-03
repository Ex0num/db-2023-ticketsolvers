import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {

  constructor(private router:Router)
  {
    let titulo:any = document.getElementById("titulo-superior");
    titulo.textContent = "Ticketsolvers | Error 404";
  }

  volverInicio()
  {
    this.router.navigate(['/inicio']);
  }

}
