import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempLineItemComponent } from './temp-line-item.component';

describe('TempLineItemComponent', () => {
  let component: TempLineItemComponent;
  let fixture: ComponentFixture<TempLineItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempLineItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempLineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
