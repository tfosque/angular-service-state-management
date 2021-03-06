import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
/* Feature Modules */
import { CartModule } from './modules/cart/cart.module';
import { ProductModule } from './modules/products/product.module';

/* Bootstrap Moduels */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/* Components */
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainMenuComponent } from './layout/main-menu/main-menu.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { CommonModule } from '@angular/common';
import { BasicListItemComponent } from './_shared-components/basic-list-item/basic-list-item.component';
import { AsmTooltipComponent } from './_shared-components/asm-tooltip/asm-tooltip.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainMenuComponent,
    HomeComponent,
    LandingPageComponent,
    BasicListItemComponent,
    AsmTooltipComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    CartModule,
    ProductModule
  ],
  exports: [CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
