import { Component, OnInit } from '@angular/core';
import { benoit, Homme, hugo, julien, Ligne, tom } from '../../model/homme';

@Component({
  selector: 'app-homme-page',
  templateUrl: './homme-page.component.html',
  styleUrls: ['./homme-page.component.scss']
})
export class HommePageComponent implements OnInit {
  hommes: Homme[] = [
    benoit,tom,julien,hugo
  ]

  lignes: Ligne[] = [

  ];

  addHomme(nouvelHomme: Homme){
    this.hommes.push(nouvelHomme)
  }

  

  removeHomme(index: number): void {
    this.lignes.splice(index, 1);
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
