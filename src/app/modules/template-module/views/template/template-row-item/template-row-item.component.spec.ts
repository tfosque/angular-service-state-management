import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRowItemComponent } from './template-row-item.component';

describe('TemplateRowItemComponent', () => {
  let component: TemplateRowItemComponent;
  let fixture: ComponentFixture<TemplateRowItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateRowItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRowItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
