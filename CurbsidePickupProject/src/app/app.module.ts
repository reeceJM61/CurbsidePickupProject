import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product/models/productservice.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { CartserviceService } from './shopping-cart/cartservice.service';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ProductComponent,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule
    
  ],
  providers: [ProductService, CartserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
