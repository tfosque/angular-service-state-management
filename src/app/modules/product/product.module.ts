import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './views/product/product.component';



@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [ProductComponent]
})
export class ProductModule { }
