import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './views/template/template.component';
import { TemplateItemComponent } from './views/template-item/template-item.component';



@NgModule({
  declarations: [TemplateComponent, TemplateItemComponent],
  imports: [
    CommonModule
  ]
})
export class TemplateModule { }
