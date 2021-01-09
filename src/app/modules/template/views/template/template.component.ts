import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/layout/services/menu.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  constructor(
    private readonly menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.menuService.setActiveMenu('Templates');
  }

}
