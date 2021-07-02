import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductInfoService {

  products = [
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

  getProducts() {
    return this.products
  }

  filter(category: string) {
    return this.products.filter(p => p.category === category)
  }

  updateFavorite(title: string) {
    this.products.forEach(p => {
      if(p.title === title) {
        p.favorite = !p.favorite
      }
    })
  }

  constructor() { }
}
