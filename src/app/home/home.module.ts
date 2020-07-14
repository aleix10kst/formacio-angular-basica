import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {ProductService} from './services/product.service';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [HomeComponent, ProductListComponent, ProductCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    ProductService
  ]
})
export class HomeModule { }
