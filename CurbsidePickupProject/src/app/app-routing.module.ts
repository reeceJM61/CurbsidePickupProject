import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductComponent } from './product/product.component';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [

  {path: 'app', component: AppComponent},
  {path: 'inventory', component: InventoryComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'product', component:ProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
