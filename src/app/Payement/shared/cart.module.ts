import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from '../components/feature/cart/cart.component';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, CartRoutingModule, HttpClientModule],
  exports: [CartComponent],
})
export class CartModule {}
