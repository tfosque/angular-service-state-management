import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private activeMenuName = new Subject<string>();
  public activeMenuName$ = this.activeMenuName.asObservable();
  constructor() {
    this.activeMenuName.next('');
  }

  public setActiveMenu(menuName: string): void {
    this.activeMenuName.next(menuName);
  }
}
