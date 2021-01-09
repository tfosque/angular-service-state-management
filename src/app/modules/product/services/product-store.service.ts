import { CartStoreService } from './../../cart/services/cart-store.service';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Product } from "../models/product";

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
    private readonly cartService: CartStoreService
  ) { }

  /* Class Methods */
  getProducts(): void {
    fetch('http://localhost:3000/api/productsASMs')
      .then(res => res.json()
        .then(results => {
          this.products.next(results);
        })
        .catch(err => {
          console.log({ err });
        })
      )
    // return this.products$;
  }
  getProduct(id: any) {
    console.log({ id });
    return;
  }

  addToSelectedProducts() {
    console.log('...adding to selected products')
  }

  removeFromSelectedProducts() {
    console.log('...remove from selected products')
  }
  saveProductToCart(): void {
    // TODO .value vs observable
    this.cartService.saveCartItems(this.selectedProducts.value);
    // TODO return {response: 200}
  }
  deleteCart() { }

  updateProductCnt() {
    this.productCnt.next(this.products.value.length)
  }
}
