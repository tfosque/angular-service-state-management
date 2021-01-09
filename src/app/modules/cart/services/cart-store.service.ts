import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { CartItem } from "../models/cartItem";
import { OrderSummary } from "../models/order-summary";

@Injectable({
  providedIn: "root"
})
/* Immutable Cart Service */
export class CartStoreService {
  data: CartItem[] = [
    {
      commerceItemId: "ci3288000805",
      productImageUrl: "/images/large/412392_default_thumb.jpg",
      unitPrice: 26.6,
      uom: "BDL",
      quantity: 3,
      itemOrProductDescription:
        "Owens Corning TruDefinition&reg; Duration&reg; Designer Shingles Sand Dune",
      productId: "C-406991",
      totalPrice: 79.8,
      vendorColorId: null,
      catalogRefId: "412392",
      url: "/productDetail/C-406991?skuId=412392&Color=Sand+Dune"
    },
    {
      commerceItemId: "ci3288000804",
      productImageUrl: "/images/large/383926_default_thumb.jpg",
      unitPrice: 0,
      uom: "EA",
      quantity: 3,
      itemOrProductDescription: "Loctite Super Glue Professional - 20 g Bottle",
      productId: "C-383926",
      totalPrice: 0,
      vendorColorId: null,
      catalogRefId: "383926",
      url: "/productDetail/C-383926?skuId=383926"
    },
    {
      commerceItemId: "ci3288000803",
      productImageUrl: "/images/large/556270_default_thumb.jpg",
      unitPrice: 58,
      uom: "RL",
      quantity: 3,
      itemOrProductDescription:
        "TRI-BUILT Sand Surface Self-Adhering Ice & Water Underlayment - 2 SQ. Roll",
      productId: "C-556270",
      totalPrice: 174,
      vendorColorId: null,
      catalogRefId: "556270",
      url: "/productDetail/C-556270?skuId=556270"
    },
    {
      commerceItemId: "ci3288000802",
      productImageUrl: "/images/large/529275_default_thumb.jpg",
      unitPrice: 0,
      uom: "BDL",
      quantity: 111,
      itemOrProductDescription:
        "CertainTeed Roofing Belmont&reg; Shingles Weathered Wood",
      productId: "C-529281",
      totalPrice: 0,
      vendorColorId: null,
      catalogRefId: "529275",
      url: "/productDetail/C-529281?skuId=529275&Color=Weathered+Wood"
    },
    {
      commerceItemId: "ci3288000801",
      productImageUrl: "/images/large/543566_default_thumb.jpg",
      unitPrice: 26.46,
      uom: "BDL",
      quantity: 1,
      itemOrProductDescription:
        "Atlas Roofing Pinnacle&reg; Pristine Architectural Shingles with Scotchgard&trade; Protector Desert",
      productId: "C-445644",
      totalPrice: 26.46,
      vendorColorId: null,
      catalogRefId: "543566",
      url: "/productDetail/C-445644?skuId=543566&Color=Desert"
    }
  ];
  /* Cart Items */
  private cartItems = new BehaviorSubject<any>(this.data);
  public cartItems$ = this.cartItems.asObservable();

  /* Sub Total */
  private subtotal = new Subject<number>();
  public subtotal$ = this.subtotal.asObservable();
  /* Other Charges */
  private otherCharges = new Subject<number | string>();
  public otherCharges$ = this.otherCharges.asObservable();
  /* Tax */
  private tax = new Subject<number | string>();
  public tax$ = this.tax.asObservable();
  /* Total */
  private total = new Subject<number>();
  public total$ = this.total.asObservable();
  /* Order Summary */
  private orderSummary = new BehaviorSubject<OrderSummary>(null);
  public orderSummary$ = this.orderSummary.asObservable();
  constructor() { }

  /* Class Methods */
  getCartItems() {
    // this.cartItems.next()
    return this.cartItems$;
  }
  getOrderSummary() {
    // this.orderSummary.next()
    return this.orderSummary$;
  }

  removeItemFromCart(id: any) {
    // this.cartItems.next()
    console.log('remove cart item', id)
  }
  saveCartItems(items: CartItem[]) { }
  updateCartItem(item: CartItem) {
    console.log('item updated.', item)
  }
  updateCartItems(items: CartItem[]) { }
  deleteCart(items: CartItem[]) { }
}
