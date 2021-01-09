import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './../template/views/template/template.component';
import { ProductsComponent } from './views/products/products.component';
import { ProductComponent } from './views/product/product.component';
@NgModule({
  declarations: [ProductsComponent, TemplateComponent, ProductComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: []
})
export class ProductModule { }
