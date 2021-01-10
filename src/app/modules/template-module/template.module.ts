import { InputValueComponent } from '../../_shared-components/input-value/input-value.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoginModule } from '../login/login.module';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './views/template/template.component';
import { TemplateRowItemComponent } from './views/template/template-row-item/template-row-item.component';
import { TempLineItemComponent } from './views/temp-line-item/temp-line-item.component';
import { LoginComponent } from '../login/views/login/login.component';

@NgModule({
  declarations: [TemplateComponent,
    InputValueComponent,
    TemplateRowItemComponent,
    TempLineItemComponent,
    LoginComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    LoginModule
  ],
  exports: [CommonModule]
})
export class TemplateModule { }
