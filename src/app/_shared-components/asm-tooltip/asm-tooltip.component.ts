import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-asm-tooltip',
  templateUrl: './asm-tooltip.component.html',
  styleUrls: ['./asm-tooltip.component.scss']
})
export class AsmTooltipComponent implements OnInit {
  @Input() text = '';
  @Input() type = "button";
  @Input() datatoggle = 'tooltip';
  @Input() placement = 'top';
  @Input() title = '';

  constructor() { }

  ngOnInit(): void {
  }

}
