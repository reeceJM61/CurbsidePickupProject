import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  inventory = [

    {id: 1, title: "Phone", price: 1000, favorite: false, category: "Electronics"},
    {id: 2, title: "Laptop", price: 2000, favorite: false, category: "Electronics"},
    {id: 3, title: "PlayStation", price: 1000, favorite: false, category: "Electronics"},
    {id: 4, title: "Milk", price: 2, favorite: false, category: "Food"},
    {id: 5, title: "Cereal", price: 4, favorite: false, category: "Food"},
    {id: 6, title: "Eggs", price: 2, favorite: false, category: "Food"},
    {id: 7, title: "Shirt", price: 20, favorite: false, category: "Clothing"},
    {id: 8, title: "Shoes", price: 30, favorite: false, category: "Clothing"},
    {id: 9, title: "Dog Food", price: 20, favorite: false, category: "Pets"},
    {id: 10, title: "Cat Food", price: 20, favorite: false, category: "Pets"}


  ]

  getInventory() {
    return this.inventory
  }

  filter(category: string) {
    return this.inventory.filter(i => i.category === category)
  }

  // setFavorite(favorite: boolean) {

  //   this.inventory.forEach(i => {
      
  //   })

  // }

  
}
