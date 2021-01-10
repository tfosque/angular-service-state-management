import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/layout/services/menu.service';
import { Product } from 'src/app/modules/products/models/product';
import { ProductStoreService } from 'src/app/modules/products/services/product-store.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  products = new BehaviorSubject<Product[]>([]);
  constructor(
    private readonly menuService: MenuService,
    private readonly productService: ProductStoreService
  ) { }

  ngOnInit(): void {
    this.menuService.setActiveMenu('Templates');

    /* grab templates if any*/

  }

}
