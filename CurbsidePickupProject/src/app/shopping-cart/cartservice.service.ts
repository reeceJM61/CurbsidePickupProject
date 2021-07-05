import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  items= new Subject()
  temp = []
  addproduct: never;

  add(product: any) {
    this.temp.push(this.addproduct)
    this.items.next(this.temp)
  }

  constructor() { }
}
