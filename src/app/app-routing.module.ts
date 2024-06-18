import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./Home/shared/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./Login/shared/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./Login/shared/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'game/:id',
    loadChildren: () =>
      import('./Home/shared/game-detail.module').then(
        (m) => m.GameDetailModule,
      ),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./Payement/shared/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('./Payement/shared/payment.module').then((m) => m.PaymentModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
