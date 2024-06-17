import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GameDetailComponent } from '../components/feature/game-detail/game-detail.component';
import { GameDetailRoutingModule } from './game-detail-routing.module';

@NgModule({
  declarations: [GameDetailComponent],
  imports: [CommonModule, GameDetailRoutingModule, HttpClientModule],
  exports: [GameDetailComponent],
})
export class GameDetailModule {}
