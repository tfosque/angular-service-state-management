import { CartStoreService } from '../../cart/services/cart-store.service';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Product } from "../models/product";
import { uniqBy } from 'lodash';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
/* Immutable Cart Service */
export class ProductStoreService {
  // data: Product[] = [];
  /* Products */
  private products = new BehaviorSubject<Product[]>([]);
  public products$ = this.products.asObservable();
  /* Selected Products */
  private selectedProducts = new BehaviorSubject<Product[]>([]);
  public selectedProducts$ = this.selectedProducts.asObservable();
  /* Single Product */
  private product = new BehaviorSubject<Product>({});
  public product$ = this.product.asObservable();
  /* productCount */
  private productCnt = new Subject<number>();
  public productCnt$ = this.productCnt.asObservable();

  constructor(
    private readonly cartService: CartStoreService,
    private readonly http: HttpClient
  ) { }

  /* Class Methods */
  getProducts(): void {
    /* fetch('http://localhost:3000/api/productsASMs')
      .then(res => res.json()
        .then(results => {
          // TODO use if statement to check for 200
          const uniqProducts = uniqBy(results, 'itemOrProductDescription');
          console.log('results:', results);
          console.log('uniqProducts:', uniqProducts);

          this.products.next(uniqProducts);
          this.updateProductCnt();
        })
        .catch(err => {
          console.log({ err });
        })
      ) */
    this.http.get<Product[]>('http://localhost:3000/api/productsASMs')
      .subscribe(res => {
        const uniqProducts = uniqBy(res, 'itemOrProductDescription');
        console.log('uniqProducts:', uniqProducts);
        this.products.next(uniqProducts);
        this.updateProductCnt();
      })
    // return this.products$;
  }
  getProduct(id: any) {
    console.log({ id });
    return;
  }

  addToSelectedProducts(product: Product) {
    const newProducts = [...this.selectedProducts.getValue(), product];
    this.selectedProducts.next(newProducts);
    // console.log('...adding to selected products', product);
    console.log('this.selProducts:', this.selectedProducts.getValue());
  }

  removeFromSelectedProducts(item: Product) {
    const fProducts = this.selectedProducts.getValue().filter((f: Product) => {
      if (f.id !== item.id) {
        console.log({ f });
        return f
      }
    })
    this.selectedProducts.next(fProducts);
    // console.log('...remove from selected products', item)
  }
  saveProductToCart(): void {
    // TODO .value vs observable
    this.cartService.saveCartItems(this.selectedProducts.getValue());
    // TODO return {response: 200}
  }
  deleteCart() { }

  updateProductCnt() {
    this.productCnt.next(this.products.value.length)
  }
}
