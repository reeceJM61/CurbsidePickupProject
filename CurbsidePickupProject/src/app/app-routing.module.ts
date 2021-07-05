import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductComponent } from './product/product.component';
import { ElectronicsComponent } from './product/electronics/electronics.component';
import { FoodComponent } from './product/food/food.component';
import { ClothingComponent } from './product/clothing/clothing.component';
import { PetsComponent } from './product/pets/pets.component';

const routes: Routes = [

  {path: 'app', component: AppComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'product', component:ProductComponent},
  //{path: 'product/:id', component:ProductComponent}
  {path: 'electronics', component:ElectronicsComponent},
  {path: 'food', component:FoodComponent},
  {path: 'clothing', component:ClothingComponent},
  {path: 'pets', component:PetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
