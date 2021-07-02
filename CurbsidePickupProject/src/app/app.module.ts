import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SearchMyStoreComponent } from './search-my-store/search-my-store.component';
import { ProductComponent } from './product/product.component';
import { ProductInfoService } from './product/product-info.service';
import { InventoryComponent } from './inventory/inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    SearchMyStoreComponent,
    ProductComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [ProductInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
