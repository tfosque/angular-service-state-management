import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './views/cart/cart.component';
import { CartLineItemComponent } from './views/cart-line-item/cart-line-item.component';

@NgModule({
  declarations: [CartComponent, CartLineItemComponent],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
