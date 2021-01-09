import { MenuService } from './../services/menu.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  activeMenu = new Subject<string>();
  constructor(
    private readonly menuService: MenuService
  ) { }
  ngOnInit(): void {
    this.menuService.activeMenuName$.subscribe(menuName => {
      this.activeMenu.next(menuName);
    })
  }
}
