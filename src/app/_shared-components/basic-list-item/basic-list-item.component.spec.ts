import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicListItemComponent } from './basic-list-item.component';

describe('BasicListItemComponent', () => {
  let component: BasicListItemComponent;
  let fixture: ComponentFixture<BasicListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
