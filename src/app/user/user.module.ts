import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './containers/user/user.component';
import { AdressListComponent } from './components/user/adress-list/adress-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import { UserAddressPipe } from './pipes/user-address.pipe';
import { AddressFormComponent } from './components/user/address-form/address-form.component';


@NgModule({
  declarations: [UserComponent, AdressListComponent, UserAddressPipe, AddressFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule
  ]
})
export class UserModule { }
