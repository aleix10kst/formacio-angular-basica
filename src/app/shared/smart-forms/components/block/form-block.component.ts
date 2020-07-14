import {Directive, Input, OnDestroy, OnInit} from '@angular/core';
import {Form, FormControl, FormGroup, ValidatorFn} from '@angular/forms';

export interface BlockField {
  name: string;
  validators?: ValidatorFn[];
}

@Directive({selector: 'form-block'})
export class FormBlockComponent implements OnInit, OnDestroy {

  @Input() baseForm: FormGroup;
  @Input() data: any;

  ngOnInit(): void {
    const group: FormGroup = new FormGroup({});

    const fields: BlockField[] = this.defineFields();

    fields.forEach((field: BlockField) => {
      const control: FormControl = new FormControl('', {validators: field.validators});
      group.addControl(field.name, control);
    });

    this.baseForm.addControl(this.key(), group);
  }

  protected defineFields(): BlockField[] {
    return [];
  }

  protected key(): string {
    return '';
  }

  get formGroup(): FormGroup {
    return this.baseForm.get(this.key()) as FormGroup;
  }

  ngOnDestroy(): void {
  }
}
