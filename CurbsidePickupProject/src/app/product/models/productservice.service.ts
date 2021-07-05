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

  //getProducts() {
    
  
    //return this.inventory = [

      

    // {id: 1, title: "Phone", price: 1000, favorite: false, category: "Electronics"},
    // {id: 2, title: "Laptop", price: 2000, favorite: false, category: "Electronics"},
    // {id: 3, title: "PlayStation", price: 1000, favorite: false, category: "Electronics"},
    // {id: 4, title: "Milk", price: 2, favorite: false, category: "Food"},
    // {id: 5, title: "Cereal", price: 4, favorite: false, category: "Food"},
    // {id: 6, title: "Eggs", price: 2, favorite: false, category: "Food"},
    // {id: 7, title: "Shirt", price: 20, favorite: false, category: "Clothing"},
    // {id: 8, title: "Shoes", price: 30, favorite: false, category: "Clothing"},
    // {id: 9, title: "Dog Food", price: 20, favorite: false, category: "Pets"},
    // {id: 10, title: "Cat Food", price: 20, favorite: false, category: "Pets"}

      // new Products(1, "Phone", 1000, false, "Electronics"),
      // new Products(2, "Laptop", 2000, false, "Electronics"),
      // new Products(3, "PlayStation", 1000, false, "Electronics"),
      // new Products(4, "Milk", 2, false, "Food"),
      // new Products(5, "Cereal", 4, false, "Food"),
      // new Products(6, "Eggs", 2, false, "Food"),
      // new Products(7, "Shirt", 20, false, "Clothing"),
      // new Products(8, "Shoes", 30, false, "Clothing"),
      // new Products(9, "Dog Food", 20, false, "Pets"),
      // new Products(10, "Cat Food", 20, false, "Pets")

//]

  //}

  // public products = [

  //   new Products(1, "Phone", 1000, false, "Electronics"),

  //   new Products(2, "Laptop", 2000, false, "Electronics"),

  //   new Products(3, "PlayStation", 1000, false, "Electronics"),

  //   new Products(4, "Milk", 2, false, "Food"),

  //   new Products(5, "Cereal", 4, false, "Food"),

  //   new Products(6, "Eggs", 2, false, "Food"),

  //   new Products(7, "Shirt", 20, false, "Clothing"),

  //   new Products(8, "Shoes", 30, false, "Clothing"),

  //   new Products(9, "Dog Food", 20, false, "Pets"),

  //   new Products(10, "Cat Food", 20, false, "Pets")

  // ]

  // getProducts() {
  //   return this.products
  // }

  // filter(category: string) {
  //   return this.products.filter(p => p.category === category)
  // }

  // updateFavorite(title: string) {
  //   this.products.forEach(p => {
  //     if(p.title === title) {
  //       p.favorite = !p.favorite
  //     }
  //   })
  // }

  // constructor() { 



  // }
}
