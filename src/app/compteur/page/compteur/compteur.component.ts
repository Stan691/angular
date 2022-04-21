import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compteur',
  template: `
    <p>Nombre de click :</p>
    <span> {{ nombreDeClick }} </span>
    <hr />
    <button (click)="ajouterUnClick()">+</button>
    <button (click)="suppUnClick()">-</button>
  `,
  styles: [
  ]
})
export class CompteurComponent implements OnInit {
  // propriete qui comptient le nombre de click
  nombreDeClick : number = 0;

  //Methode qui ajoute 1 a chaque clique
  ajouterUnClick() {
    this.nombreDeClick = this.nombreDeClick + 1;
  }

  suppUnClick() { 
    this.nombreDeClick = this.nombreDeClick - 1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
