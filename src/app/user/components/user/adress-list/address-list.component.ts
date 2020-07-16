import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray} from '@angular/forms';

@Component({
  selector: 'app-adress-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent {

  @Input() addresses: FormArray;

  @Output() editAddress: EventEmitter<number> = new EventEmitter<number>();
  @Output() deleteAddress: EventEmitter<number> = new EventEmitter<number>();

  onClickEditAddress(index: number): void {
    this.editAddress.emit(index);
  }

  onClickDeleteAddress(index: number): void {
    this.deleteAddress.emit(index);
  }

}
