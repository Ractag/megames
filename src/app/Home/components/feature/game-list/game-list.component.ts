import { Component, inject } from '@angular/core';
import { GameListService } from '../../../shared/game-list.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css',
})
export class GameListComponent {
  public gameList$ = inject(GameListService).getAllGames$();
}
