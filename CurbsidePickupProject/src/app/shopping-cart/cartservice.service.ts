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

  add(product: Iproducts) {
    this.items.push(product)
    
    // this.temp.push(product)
    // this.items.next(this.temp)
  }

  getItems() {
    return this.items
  }

  constructor() { }
}
