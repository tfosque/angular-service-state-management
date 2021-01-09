import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './modules/cart/views/cart/cart.component';
import { ProductComponent } from './modules/product/views/product/product.component';
import { TemplateComponent } from './modules/template/views/template/template.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'products', component: ProductComponent },
  { path: 'templates', component: TemplateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule]
})
export class AppRoutingModule { }
