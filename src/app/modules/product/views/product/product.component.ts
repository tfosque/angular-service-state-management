import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MenuService } from 'src/app/layout/services/menu.service';
import { Product } from '../../models/product';
import { ProductStoreService } from '../../services/product-store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products = new BehaviorSubject<Product[]>([]);
  constructor(
    private readonly menuService: MenuService,
    private readonly productService: ProductStoreService
  ) { }

  ngOnInit(): void {
    console.log('products:', this.products);
    this.productService.getProducts();

    this.menuService.setActiveMenu('Products');

    this.productService.products$.subscribe(items => {
      this.products.next(items);
      // console.log(items);
      console.log(this.products)
    })
  }
}
