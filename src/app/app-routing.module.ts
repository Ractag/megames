import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './Home/components/feature/game-list/game-list.component';
import { LoginComponent } from './Login/components/feature/login/login.component';
import { RegisterComponent } from './Login/components/feature/register/register.component';
import { GameDetailComponent } from './Home/components/feature/game-detail/game-detail.component';
import { CartComponent } from './Payement/components/feature/cart/cart.component';
import { PaymentComponent } from './Payement/components/feature/payment/payment.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: GameListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'game/:id', component: GameDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'payment', component: PaymentComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
