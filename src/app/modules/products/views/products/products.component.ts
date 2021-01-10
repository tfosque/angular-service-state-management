import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/layout/services/menu.service';
import { Product } from '../../models/product';
import { ProductStoreService } from '../../services/product-store.service';
import { uniqBy } from 'lodash';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

// TODO add selected products details
export class ProductsComponent implements OnInit {
  products = new BehaviorSubject<Product[]>([]);
  productCnt = new BehaviorSubject<number>(0);
  selectedProducts = new BehaviorSubject<Product[]>([])

  constructor(
    private readonly menuService: MenuService,
    private readonly productService: ProductStoreService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts();

    /* set menu */
    this.menuService.setActiveMenu('Products');

    /* subscribe selected products */
    this.productService.selectedProducts$.subscribe(sel => {
      /* TODO Move to service Removes Dups & give user alert that item is already selected */
      this.selectedProducts.next(uniqBy(sel, 'itemOrProductDescription'));
    })
    /* subscribe to products 
      TODO: this can be a returned value don't need subscription here
     */
    this.productService.products$.subscribe(items => {
      this.products.next(items);
    })
    /* subscribe to product get count don't need subscription here just return value */
    this.productService.productCnt$.subscribe(cnt => {
      this.productCnt.next(cnt)
    })
  }
}
