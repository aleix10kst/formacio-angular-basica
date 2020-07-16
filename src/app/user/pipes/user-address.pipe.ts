import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userAddress'
})
export class UserAddressPipe implements PipeTransform {

  transform(value: { [key: string]: string }): string {
    const {street, postalCode, city} = value;
    return `${street}, ${postalCode} - ${city}`;
  }

}
