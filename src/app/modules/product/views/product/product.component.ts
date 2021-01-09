import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/layout/services/menu.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products = [{ name: 'eraser' }, { name: 'bubble gum' }];
  constructor(
    private readonly menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.menuService.setActiveMenu('Products');
  }

}
