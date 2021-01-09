import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MenuService } from 'src/app/layout/services/menu.service';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems = new Subject<CartItem[]>()
  constructor(
    private readonly menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.menuService.setActiveMenu('Cart');
  }

}
