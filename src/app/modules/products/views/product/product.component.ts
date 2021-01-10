import { ProductStoreService } from '../../services/product-store.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  constructor(
    private readonly productService: ProductStoreService
  ) { }

  ngOnInit(): void {
    // console.log(this.product, 'prod')
  }

  addSelectedProducts() {
    this.productService.addToSelectedProducts(this.product);
  }
  removeSelectedProduct() {

  }
  clearSelectedProducts() {

  }

}
