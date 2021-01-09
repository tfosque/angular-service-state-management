import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
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

  constructor() { }

  /* Class Methods */
  getProducts(): void {
    fetch('https://my.api.mockaroo.com/angular-service-state-mngment_products.json?key=c1a35bd0')
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
  saveCartItems() { }
  updateCartItems() { }
  deleteCart() { }
}
