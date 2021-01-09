import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Product } from "../../product/models/product";

@Injectable({
  providedIn: "root"
})
/* Immutable Cart Service */
export class SuggestiveSellingStoreService {
  data: Product[] = [];
  /* Products */
  private products = new BehaviorSubject<Product[]>(this.data);
  public products$ = this.products.asObservable();
  /* Selected Products */
  private selectedProducts = new BehaviorSubject<Product[]>([]);
  public selectedProducts$ = this.selectedProducts.asObservable();
  /* Single Product */
  private product = new BehaviorSubject<Product>({});
  public product$ = this.product.asObservable();

  constructor() { }

  /* Class Methods */
  getProducts() {
    // this.products.next([])
    return this.products$;
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
