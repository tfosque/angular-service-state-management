import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsmTooltipComponent } from './asm-tooltip.component';

describe('AsmTooltipComponent', () => {
  let component: AsmTooltipComponent;
  let fixture: ComponentFixture<AsmTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsmTooltipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsmTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
