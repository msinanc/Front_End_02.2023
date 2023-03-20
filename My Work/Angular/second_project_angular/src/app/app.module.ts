import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { DetailComponent } from './detail/detail.component';
import { BasketComponent } from './basket/basket.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ProductComponent,
    AboutUsComponent,
    DetailComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
