import { InputValueComponent } from './../../_shared-components/input-value/input-value.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './views/template/template.component';
import { TemplateItemComponent } from './views/template-item/template-item.component';



@NgModule({
  declarations: [TemplateComponent, TemplateItemComponent, InputValueComponent],
  imports: [
    CommonModule
  ]
})
export class TemplateModule { }
