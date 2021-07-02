import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  items = new Subject()
  temp = []

  // TODO: fix add 

  add(products: any) {
    //this.temp.push(products) //TODO: error products
    //this.temp.next(this.temp)
  }

  getItems() {
    return this.items
  }

  constructor() { }
}
