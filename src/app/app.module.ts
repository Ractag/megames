import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameListComponent } from './Home/components/feature/game-list/game-list.component';
import { GameDetailComponent } from './Home/components/feature/game-detail/game-detail.component';
import { GameListDumbComponent } from './Home/components/ui/game-list-dumb/game-list-dumb.component';
import { GameDetailDumbComponent } from './Home/components/ui/game-detail-dumb/game-detail-dumb.component';
import { RegisterComponent } from './Login/components/feature/register/register.component';
import { LoginDumbComponent } from './Login/components/ui/login-dumb/login-dumb.component';
import { RegisterDumbComponent } from './Login/components/ui/register-dumb/register-dumb.component';
import { CartDumbComponent } from './Payement/components/ui/cart-dumb/cart-dumb.component';
import { PaymentDumbComponent } from './Payement/components/ui/payment-dumb/payment-dumb.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameDetailComponent,
    GameListDumbComponent,
    GameDetailDumbComponent,
    RegisterComponent,
    LoginDumbComponent,
    RegisterDumbComponent,
    CartDumbComponent,
    PaymentDumbComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
