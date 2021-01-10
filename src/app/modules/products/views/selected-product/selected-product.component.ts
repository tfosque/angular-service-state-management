import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductStoreService } from '../../services/product-store.service';

@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.scss']
})
export class SelectedProductComponent implements OnInit {
  @Input() selection: Product
  total = 0;
  constructor(
    private readonly productService: ProductStoreService
  ) { }

  ngOnInit(): void {
    this.total = this.selection.unitPrice * this.selection.quantity;;
    console.log('selection:', this.selection);
  }

  setTotal() {

  }

  removeSelectedProduct(item: Product) {
    this.productService.removeFromSelectedProducts(item)
  }

}
