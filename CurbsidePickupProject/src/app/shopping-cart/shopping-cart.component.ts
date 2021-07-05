import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { Iproducts } from '../product/models/iproducts';
import { ProductService } from '../product/models/productservice.service';
import { CartserviceService } from './cartservice.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  
items: Array<Iproducts> = []
totalPrice: number = 0
total: number = 0

quantity: number =1

 

  constructor(private pService: ProductService, private cService: CartserviceService) { }

  ngOnInit() {

    this.items = this.cService.getItems()

    this.items.forEach(i => {
      this.total += i.price 
    })

    this.totalPrice = this.total


  }

  quantityIncrement() {
    return this.quantity = this.cService.increment()
  }

  quantityDecrement() {
    return this.quantity = this.cService.decrement()
  }

}
