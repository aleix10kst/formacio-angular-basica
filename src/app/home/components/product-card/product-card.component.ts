import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;
  @Output() addToCart: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {}

  onClickAddToCard(id: number): void {
    this.addToCart.emit(id);
  }

}
