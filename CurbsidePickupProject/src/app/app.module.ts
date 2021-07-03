import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductComponent } from './product/product.component';
import { ProductInfoService } from './product/product-info.service';
import { InventoryComponent } from './inventory/inventory.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ElectronicsComponent } from './product/electronics/electronics.component';
import { FoodComponent } from './product/food/food.component';
import { ClothingComponent } from './product/clothing/clothing.component';
import { PetsComponent } from './product/pets/pets.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ProductComponent,
    InventoryComponent,
    ElectronicsComponent,
    FoodComponent,
    ClothingComponent,
    PetsComponent,

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
