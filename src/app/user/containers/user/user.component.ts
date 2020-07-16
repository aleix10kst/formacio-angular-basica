import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  form: FormGroup;
  addressForm: FormGroup;

  loadedAddress: boolean = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      userData: this.fb.group({}),
      userAddresses: this.fb.array([])
    });

    this.addressForm = this.fb.group({
      street: [],
      postalCode: [],
      city: []
    });
  }

  ngOnInit(): void {}

  get userForm(): FormGroup {
    return this.form.get('userData') as FormGroup;
  }

  get userAddresses(): FormArray {
    return this.form.get('userAddresses') as FormArray;
  }

  onSubmitAddressForm(): void {}

  onResetAddressForm(): void {}

  onClickEditAddress(index: number): void {}

  onClickDeleteAddress(index: number): void {}

}
