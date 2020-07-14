import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CheckoutComponent} from './containers/checkout/checkout.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import {SmartFormsModule} from '../shared/smart-forms/smart-forms.module';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [CheckoutComponent, AddressFormComponent, CustomerFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SmartFormsModule
  ],
  exports: [CheckoutComponent]
})
export class CheckoutModule { }
