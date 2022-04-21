import { Component, OnInit } from '@angular/core';
import { aubergine, avocat, brocoli, Legume, Ligne, oignon, tomate } from '../../model/recette';

@Component({
  selector: 'app-recette-page',
  templateUrl: './recette-page.component.html',
  styleUrls: ['./recette-page.component.scss']
})
export class RecettePageComponent implements OnInit {
  legumes: Legume[] = [
    tomate,oignon,brocoli,aubergine,avocat
  ]

  lignes: Ligne[] = [

  ];

  addLegume(nouveauLegume: Legume){
   const index = this.lignes.findIndex(currentLigne => {
     if (currentLigne.legume.name === nouveauLegume.name) {
       return  true
     }
     return false 
   })

   if (index > -1){
     this.lignes[index].quantite++
     return
   }
   
   const ligne: Ligne = {
     quantite: 1,
     legume: nouveauLegume
   }
   
    this.lignes.push(ligne)
  }

  removeLegume(index: number): void {
    this.lignes.splice(index, 1);
  }




  constructor() { }

  ngOnInit(): void {
  }

}
