import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Nous importons notre page composant dans le routeur
import { TodoPageComponent } from './todo/page/todo-page/todo-page.component';
import { RecettePageComponent } from './recette/page/recette-page/recette-page.component';
import { CompteurComponent } from './compteur/page/compteur/compteur.component';
import { DisneyPageComponent } from './disney/page/disney-page/disney-page.component';
import { Page404Component } from './404/page/page404/page404.component';
import { HommePageComponent } from './homme/page/homme-page/homme-page.component';
import { GameComponent } from './game/page/game/game.component';




const routes: Routes = [
  // Affiche le composant TodoPageComponent quand l'url est todo
  { path: 'todo', component: TodoPageComponent },
  { path: 'recette', component: RecettePageComponent },
  { path: 'compteur', component: CompteurComponent},
  { path: 'disney', component: DisneyPageComponent},
  { path: 'homme', component: HommePageComponent},
  { path: 'game', component: GameComponent },
  { path: '**', pathMatch: 'full', component: Page404Component},
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}