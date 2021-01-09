import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdComponent } from './views/ad/ad.component';
import { AdImgComponent } from './views/ad-img/ad-img.component';



@NgModule({
  declarations: [AdComponent, AdImgComponent],
  imports: [
    CommonModule
  ]
})
export class AdsModule { }
