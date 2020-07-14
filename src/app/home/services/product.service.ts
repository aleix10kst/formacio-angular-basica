import { Injectable } from '@angular/core';
import {Observable, of, timer} from 'rxjs';
import {Product} from '../models/product';
import {map, switchMap} from 'rxjs/operators';

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return timer(3000).pipe(
      switchMap(() => of( [
        {id: 1, name: 'Macbook Pro 16', price: 3000, description: 'A brand new computer'},
        {id: 2, name: 'Macbook Pro 16', price: 3000, description: 'A brand new computer'},
        {id: 3, name: 'Macbook Pro 16', price: 3000, description: 'A brand new computer'},
        {id: 4, name: 'Macbook Pro 16', price: 3000, description: 'A brand new computer'},
        {id: 5, name: 'Macbook Pro 16', price: 3000, description: 'A brand new computer'},
      ])));
  }
}
