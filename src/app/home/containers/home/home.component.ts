import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service';
import {Observable, Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {AlertService} from '../../../core/services/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  cartList: Product[] = [];
  products$: Observable<Product[]>;

  private productsSub: Subscription;

  constructor(private productService: ProductService, private alertService: AlertService, private router: Router) { }

  ngOnInit(): void {
    this.productsSub = this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  onClickCheckout(): void {
    this.router.navigate(['checkout']).finally();
  }

  onAddToCart(id: number): void {
    const productToAdd: Product = this.products.find((product: Product) => product.id === id);
    this.cartList.push(productToAdd);
    this.alertService.emitAlert(`Product with name ${productToAdd.name} and price tag of ${productToAdd.price} successfully added to cart!`);
  }

  ngOnDestroy(): void {
    this.productsSub.unsubscribe();
  }

}
