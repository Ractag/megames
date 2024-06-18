import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from '../components/feature/register/register.component';
import { RegisterModuleRouting } from './register-routing.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, RegisterModuleRouting, HttpClientModule],
  exports: [RegisterComponent],
})
export class RegisterModule {}
