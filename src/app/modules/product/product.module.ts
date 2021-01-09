import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './views/product/product.component';
import { TemplateComponent } from './../template/views/template/template.component';
@NgModule({
  declarations: [ProductComponent, TemplateComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: []
})
export class ProductModule { }
