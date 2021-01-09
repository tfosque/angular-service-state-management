import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  /* Sub Total */
  private subtotal = new Subject<number>();
  public subtotal$ = this.subtotal.asObservable();
  /* Other Charges */
  private otherCharges = new Subject<number>();
  public otherCharges$ = this.otherCharges.asObservable();
  /* Tax */
  private tax = new Subject<number>();
  public tax$ = this.tax.asObservable();
  /* Total */
  private total = new Subject<number>();
  public total$ = this.total.asObservable();
  constructor() { }

  ngOnInit(): void {
  }

}
