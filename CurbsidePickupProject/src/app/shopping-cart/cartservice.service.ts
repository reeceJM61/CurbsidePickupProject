import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Iproducts } from '../product/models/iproducts';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  //items= new Subject()
  items: Array<Iproducts> = []
  addToCart: any

  quantity: number = 1

  add(product: Iproducts) {
    this.items.push(product)
    
    // this.temp.push(product)
    // this.items.next(this.temp)
  }

  getItems() {
    return this.items
  }

  increment() {
    return this.quantity += 1
  }

  decrement() {
    return this.quantity -= 1
  }

  constructor() { }
}
