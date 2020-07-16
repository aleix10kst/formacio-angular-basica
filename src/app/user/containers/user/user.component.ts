import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Address} from '../../models/address';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  form: FormGroup;

  loadedAddress: any;
  loadedAddressIdx: number;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      userData: this.fb.group({
        name: [],
        lastname: []
      }),
      userAddresses: this.fb.array([
        this.fb.group({
          street: [],
          postalCode: [],
          city: []
        })
      ])
    });
  }

  ngOnInit(): void {}

  get userForm(): FormGroup {
    return this.form.get('userData') as FormGroup;
  }

  get userAddresses(): FormArray {
    return this.form.get('userAddresses') as FormArray;
  }

  onEditAddress(index: number): void {
    this.loadedAddressIdx = index;
    this.loadedAddress = this.userAddresses.at(index).value;
  }

  onDeleteAddress(index: number): void {
    this.userAddresses.removeAt(index);
  }

  onAddAddress({street, postalCode, city}: Address): void {
    const addAddress: FormGroup = new FormGroup({
      street: new FormControl(street),
      postalCode: new FormControl(postalCode),
      city: new FormControl(city)
    });
    this.userAddresses.push(addAddress);
  }

  onUpdateAddress(address: Address): void {
    this.userAddresses.at(this.loadedAddressIdx).setValue(address);
    this.loadedAddress = this.loadedAddressIdx = null;
  }

  onCancelAddress(): void {
    this.loadedAddress = this.loadedAddressIdx = null;
  }

}
