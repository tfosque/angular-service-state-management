import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './views/products/products.component';
import { ProductComponent } from './views/product/product.component';
import { SelectedProductComponent } from './views/selected-product/selected-product.component';
import { InputValueComponent } from '../../_shared-components/input-value/input-value.component';
import { ProductStoreService } from './services/product-store.service';

@NgModule({
  declarations: [ProductsComponent, ProductComponent, SelectedProductComponent, InputValueComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [],
  providers: [ProductStoreService],
})
export class ProductModule { }
