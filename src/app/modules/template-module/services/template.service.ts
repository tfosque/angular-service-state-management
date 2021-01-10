import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from '../../products/models/product';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  /* templates */
  private templateItems = new BehaviorSubject<Product[]>([]);
  public templateItems$ = this.templateItems.asObservable();
  /* selected templates */
  private selectedTemplateItems = new BehaviorSubject<Product[]>([]);
  public selectedTemplateItems$ = this.selectedTemplateItems.asObservable();
  /* template cnt */
  private templateCnt = new BehaviorSubject<Product[]>([]);
  public templateCnt$ = this.templateCnt.asObservable();
  constructor() { }

  getTemplateItems() {
    return this.templateItems$;
  }
  addTemplateItem(item: Product) {
    const items = [...this.templateItems.getValue(), item];
    this.templateItems.next(items);
  }
}
