import {Component, Input, OnChanges, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Address} from '../../../models/address';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent {

  @Input() set loadedAddress(value: Address) {
    if (value) {
      this.#_loadedAddress = value;
      this.addressForm.setValue({...value});
    } else {
      this.#_loadedAddress = null;
    }
  }

  get loadedAddress(): Address {
    return this.#_loadedAddress;
  }

  #_loadedAddress: any;

  @Output() addAddress: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateAddress: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancelAddress: EventEmitter<void> = new EventEmitter<void>();

  addressForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      street: [],
      postalCode: [],
      city: []
    });
  }

  onSubmitAddressForm(): void {
    const addressValue = this.addressForm.getRawValue();
    if (this.loadedAddress) {
      this.updateAddress.emit(addressValue);
    } else {
      this.addAddress.emit(addressValue);
    }
    this.addressForm.reset();
  }

  onCancelAddressForm(): void {
    this.addressForm.reset();
    this.cancelAddress.emit();
  }

  onResetAddressForm(): void {
    this.loadedAddress = null;
  }

}
