import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SearchMyStoreComponent } from './search-my-store/search-my-store.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    ShoppingCartComponent,
    SearchMyStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
