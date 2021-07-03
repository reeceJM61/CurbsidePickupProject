import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductComponent } from './product/product.component';
import { ProductInfoService } from './product/product-info.service';
import { InventoryComponent } from './inventory/inventory.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ProductComponent,
    InventoryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule
    
  ],
  providers: [ProductInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
