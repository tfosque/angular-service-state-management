import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MenuService } from '../layout/services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  activeMenu = new Subject<string>();
  constructor(
    private readonly menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.menuService.setActiveMenu('Home');
  }
}
