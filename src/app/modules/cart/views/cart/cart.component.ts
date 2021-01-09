import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/layout/services/menu.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    private readonly menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.menuService.setActiveMenu('Cart');
  }

}
