import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './views/cart/cart.component';
import { CartLineItemComponent } from './views/cart-line-item/cart-line-item.component';
import { OrderSummaryComponent } from './views/order-summary/order-summary.component';

@NgModule({
  declarations: [CartComponent, CartLineItemComponent, OrderSummaryComponent],
  imports: [
    CommonModule
  ],
  exports: [OrderSummaryComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CartModule { }
