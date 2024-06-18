import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameDetailComponent } from '../components/feature/game-detail/game-detail.component';

const routes: Routes = [{ path: '', component: GameDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameDetailRoutingModule {}
