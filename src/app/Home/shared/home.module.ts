import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { GameListComponent } from '../components/feature/game-list/game-list.component';
import { GameListDumbComponent } from '../components/ui/game-list-dumb/game-list-dumb.component';

@NgModule({
  declarations: [GameListComponent, GameListDumbComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
