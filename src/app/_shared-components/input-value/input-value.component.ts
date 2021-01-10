import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-value',
  templateUrl: './input-value.component.html',
  styleUrls: ['./input-value.component.scss']
})
export class InputValueComponent implements OnInit {
  @Input() qty: number;
  constructor() { }

  ngOnInit(): void {
    console.log('qty:', this.qty)
  }

}
