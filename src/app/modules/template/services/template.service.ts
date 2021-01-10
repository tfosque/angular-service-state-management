import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from '../../products/models/product';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  templateItems = new BehaviorSubject<Product[]>([]);
  templateItems$ = this.templateItems.asObservable();
  constructor() { }

  getTemplateItems() {
    return this.templateItems$;
  }
  addTemplateItem(item: Product) {
    const items = [...this.templateItems.getValue(), item];
    this.templateItems.next(items);
  }
}
