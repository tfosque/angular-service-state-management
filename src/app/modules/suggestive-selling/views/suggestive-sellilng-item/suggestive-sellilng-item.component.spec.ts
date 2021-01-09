import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestiveSellilngItemComponent } from './suggestive-sellilng-item.component';

describe('SuggestiveSellilngItemComponent', () => {
  let component: SuggestiveSellilngItemComponent;
  let fixture: ComponentFixture<SuggestiveSellilngItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestiveSellilngItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestiveSellilngItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
