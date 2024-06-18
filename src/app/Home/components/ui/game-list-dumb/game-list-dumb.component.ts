import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-list-dumb',
  templateUrl: './game-list-dumb.component.html',
  styleUrl: './game-list-dumb.component.css',
})
export class GameListDumbComponent {
  @Input()
  game!: any;
}
