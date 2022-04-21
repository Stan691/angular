import { Component, OnInit } from '@angular/core';
import { DisneyData, Personnage } from '../../model/disney';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disney-page',
  templateUrl: './disney-page.component.html',
  styleUrls: ['./disney-page.component.scss'],
})
export class DisneyPageComponent implements OnInit {
  // stock les données de l'api
  disneyData: DisneyData | null = null;
  pageCourante: number = 1 ;
  personnages: Personnage[] = [

  ]

  addPersonnage(personnage: Personnage) {
    this.personnages.push(personnage)
  }

  removePersonnage(index: number): void {
    this.personnages.splice(index, 1);
  }

  isNotFavorite(personnage: Personnage): boolean{
    const index = this.personnages.findIndex(currentPersonnage => {
      if (currentPersonnage.name === personnage.name) {
        return  true
      }
      return false 
    })
 
    if (index > -1){
      
      return false
    }
    return true
  }

  pageSuivante () {
    this.pageCourante++;
    this.getDisneyData(this.pageCourante);
 }

 pagePrecedente () {
  this.pageCourante--;
  this.getDisneyData(this.pageCourante);
}

  

  constructor() {}

  ngOnInit(): void {
    // quand le composant s'affiche, nous éxécutons la  méthode getDisneyData
    this.getDisneyData();
  }

  // method pour récupérer les données en ligne
  getDisneyData(page: number = 1): void {
    fetch('https://api.disneyapi.dev/characters?page='+ page)
      .then((response) => {
        // les données récupérées sont au format Json, cette ligne les convertie en variable
        return response.json();
      })
      .then((disneyData) => {
        // nous stockons les variables de l'api dans notre composant
        this.disneyData = disneyData;
      });
  }

}
