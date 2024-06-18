import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from '../components/feature/game-list/game-list.component';

const routes: Routes = [
  { path: '', component: GameListComponent },
  { path: 'home', component: GameListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
