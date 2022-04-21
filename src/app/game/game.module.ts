import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresComponent } from './components/stores/stores.component';
import { LoaderComponent } from './components/loader/loader.component';
import { BasketComponent } from './components/basket/basket.component';
import { GameComponent } from './page/game/game.component';
import { DealsComponent } from './components/deals/deals.component';



@NgModule({
  declarations: [
    StoresComponent,
    LoaderComponent,
    BasketComponent,
    GameComponent,
    DealsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GameModule { }
