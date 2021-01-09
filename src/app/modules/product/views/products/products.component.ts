import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/layout/services/menu.service';
import { Product } from '../../models/product';
import { ProductStoreService } from '../../services/product-store.service';

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

    this.menuService.setActiveMenu('Products');

    this.productService.selectedProducts$.subscribe(sel => {
      this.selectedProducts.next(sel)
    })
    /* subscribe to products TODO: this can be a returned value don't need subscription here */
    this.productService.products$.subscribe(items => {
      this.products.next(items);
      // console.log(this.products)
    })
    /* get count */
    this.productService.productCnt$.subscribe(cnt => {
      //  console.log({ cnt });
      this.productCnt.next(cnt)
    })
  }
}
