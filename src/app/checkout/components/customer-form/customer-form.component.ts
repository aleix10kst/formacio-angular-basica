import {Component, OnDestroy, OnInit} from '@angular/core';
import {BlockField, FormBlockComponent} from '../../../shared/smart-forms/components/block/form-block.component';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent extends FormBlockComponent implements OnInit, OnDestroy{

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  protected defineFields(): BlockField[] {
    return [
      {
        name: 'name',
        validators: [Validators.required]
      },
      {
        name: 'lastname',
        validators: [Validators.minLength(10)]
      }
    ];
  }

  protected key(): string {
    return 'customerBlock';
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
