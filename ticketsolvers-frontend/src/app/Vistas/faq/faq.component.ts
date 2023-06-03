import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {

  constructor()
  {
      let titulo:any = document.getElementById("titulo-superior");
      titulo.textContent = "Tesys | FAQ"; 
  }

  panelOpenState = false;
}