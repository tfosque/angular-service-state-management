import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugggestiveSellingComponent } from './sugggestive-selling.component';

describe('SugggestiveSellingComponent', () => {
  let component: SugggestiveSellingComponent;
  let fixture: ComponentFixture<SugggestiveSellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugggestiveSellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugggestiveSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
