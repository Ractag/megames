import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PaymentComponent } from '../components/feature/payment/payment.component';
import { PaymentRoutingModule } from './payment-routing.module';

@NgModule({
  declarations: [PaymentComponent],
  imports: [CommonModule, PaymentRoutingModule, HttpClientModule],
  exports: [PaymentComponent],
})
export class PaymentModule {}
